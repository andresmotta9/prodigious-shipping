import { Component, AfterContentInit ,ViewChildren, ViewChild, ContentChild } from '@angular/core';
import { PersonAddressComponent } from 'src/app/features/shipping-label-maker/person-address/person-address.component';
import { Shipping } from 'src/app/models/Shipping';
import { Observable } from 'rxjs';
import { ShippingWeightComponent } from 'src/app/features/shipping-label-maker/shipping-weight/shipping-weight.component';
import { ShippingConfirmComponent } from 'src/app/features/shipping-label-maker/shipping-confirm/shipping-confirm.component';
import { ShippingOptionComponent } from 'src/app/features/shipping-label-maker/shipping-option/shipping-option.component';
import { WizardAction } from 'src/app/enum/WizardAction';

@Component({
  selector: 'app-wizard-step',
  templateUrl: './wizard-step.component.html',
  styleUrls: ['./wizard-step.component.css']
})
export class WizardStepComponent implements AfterContentInit {

  public visibility: Boolean = false;
  public wizardContext: Shipping;
  public state: string = null;

  @ContentChild(PersonAddressComponent, {static: false}) personAddresses: PersonAddressComponent;
  @ContentChild(ShippingWeightComponent, {static: false}) shippingWeight: ShippingWeightComponent;
  @ContentChild(ShippingOptionComponent, {static: false}) shippingOption: ShippingOptionComponent;
  @ContentChild(ShippingConfirmComponent, {static: false}) shippingConfirm: ShippingConfirmComponent;

  constructor() { }

  ngAfterContentInit() {
    let obs = new Observable( observable => {
      let component = this.getAvaliableComponent();
      if (component !== "undefined") {
        setInterval( () => {
          if(component.status !== null) {
            let status = component.status;
            component.status = null;
            component.visibility = false;
            this.wizardContext = component.wizardContext;
            observable.next(status)
            if(status === WizardAction[WizardAction.End]) { observable.complete();}
          }                 
        }, 100);
      }      
    })
    obs.subscribe((state: string) => {      
      this.state = state;       
    })
  }

  setComponentConfig(wizardContext: Shipping, visibility: boolean) {
    if (this.getAvaliableComponent() !== "undefined") {      
      this.getAvaliableComponent().wizardContext = wizardContext;
      this.getAvaliableComponent().visibility = visibility; 
    }
  }

  getAvaliableComponent(): any {
    if(typeof this.personAddresses !== "undefined") {
      return this.personAddresses;
    }
    if(typeof this.shippingWeight !== "undefined") {
      return this.shippingWeight;
    }
    if(typeof this.shippingOption !== "undefined") {
      return this.shippingOption;
    }
    if(typeof this.shippingConfirm !== "undefined") {
      return this.shippingConfirm;
    }
    return "undefined"
  }
}
