import { Component } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';
import { WizardData } from 'src/app/models/WizardData';
import { WizardAction } from 'src/app/enum/WizardAction';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-weight',
  templateUrl: './shipping-weight.component.html',
  styleUrls: ['./shipping-weight.component.css']
})
export class ShippingWeightComponent implements WizardData { 
  
  form: FormGroup;
  public wizardAction = WizardAction;
  public wizardContext: Shipping = new Shipping();
  public visibility: Boolean;
  public status: string = null;

  constructor() { 
    this.form = new FormGroup({
      'weight': new FormControl(this.wizardContext.weight, [Validators.required, Validators.min(1)])
    })
  }

  onAction(action?: string) {    
    this.wizardContext.weight = this.form.value.weight;
    if( action === WizardAction[WizardAction.Prev]) {
      this.status =  action;
    } else if(this.form.valid && this.status !== WizardAction[WizardAction.Prev]) {
      this.status = WizardAction[WizardAction.Next];
    }
  }
}
