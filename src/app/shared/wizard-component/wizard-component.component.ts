import { Component, Input, ContentChild, ContentChildren ,AfterContentInit, QueryList, Output, EventEmitter } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { WizardHeaderComponentComponent} from '../wizard-header-component/wizard-header-component.component'
import { WizardStepComponent } from '../wizard-step/wizard-step.component';
import { Observable } from 'rxjs';
import { WizardAction } from 'src/app/enum/WizardAction';


@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.css']
})

export class WizardComponentComponent implements AfterContentInit {

  @ContentChild(WizardHeaderComponentComponent, {static: false}) header: WizardComponentComponent;
  @ContentChildren(WizardStepComponent) steps: 
  QueryList<WizardStepComponent>;
  @Input() wizardContext: Shipping;
  @Output() complete: EventEmitter<Shipping> = new EventEmitter();
  public index: number = 0;
  public progress: number = 0;
  public progressPorcentage: number = 0;

  constructor() { }
  ngAfterContentInit () { 
    if(this.steps.length) {
      this.setStepsConfig()
      this.checkStepStatus()
      this.progressPorcentage = 100/this.steps.length;
    }
  }
  checkStepStatus() {    
    let obs = new Observable( observable => {
      setInterval( () => {
        if(this.steps.toArray()[this.index].state !== null) {
          let state = this.steps.toArray()[this.index].state;
          this.steps.toArray()[this.index].state = null    
          observable.next(state);
          if(state === WizardAction[WizardAction.End]) { observable.complete();}
        }
      }, 100);
    })
    obs.subscribe((state: string) => {
      if(state === WizardAction[WizardAction.Next]) {
        this.index++;
        if(this.header.progress < 100) {
          this.header.progress += this.progressPorcentage;
        }
        this.setStepsConfig();
      } else if (state === WizardAction[WizardAction.Prev]) {
        this.index--;
        if(this.header.progress > 0) {
          this.header.progress -= this.progressPorcentage;
        }
        this.setStepsConfig();
      } else {
        if(this.header.progress < 100) {
          this.header.progress += this.progressPorcentage;
        }
        this.complete.emit(this.wizardContext);
      }
      
    })
  }
  setStepsConfig() {
    if (typeof this.steps.toArray()[this.index] === 'undefined') {
      this.index = 0;
    }
    this.steps.toArray()[this.index].setComponentConfig(this.wizardContext, true);
  }
}
