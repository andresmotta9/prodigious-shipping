import { Component, Input} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Person } from 'src/app/models/Person';
import { Shipping } from 'src/app/models/Shipping';
import { WizardData } from 'src/app/models/WizardData';
import { WizardAction } from 'src/app/enum/WizardAction';

@Component({
  selector: 'app-person-address',
  templateUrl: './person-address.component.html',
  styleUrls: ['./person-address.component.css']
})
export class PersonAddressComponent implements WizardData {
  
  @Input() title: string = '';
  form: FormGroup;
  public wizardAction = WizardAction;
  public status: string = null;
  public person: Person = new Person();
  public wizardContext: Shipping;
  public visibility: Boolean;

  constructor() { 
    this.form = new FormGroup({
      'name': new FormControl(this.person.name, [Validators.required, Validators.minLength(3)]),
      'street': new FormControl(this.person.street, [Validators.required, Validators.minLength(3)]),
      'city': new FormControl(this.person.city, [Validators.required, Validators.minLength(3)]),
      'state': new FormControl(this.person.state, [Validators.required, Validators.minLength(2)]),
      'zip': new FormControl(this.person.zip, Validators.required)
    })
  }

  onAction(action?: string) {
    
    this.title === "sender´s" ? this.wizardContext.from = this.form.value : this.wizardContext.to = this.form.value;   
    if( action === WizardAction[WizardAction.Prev]) {
      this.status =  action;
    } else if(this.form.valid && this.status !== WizardAction[WizardAction.Prev]) {
      this.status = WizardAction[WizardAction.Next];
    }
  }
}
