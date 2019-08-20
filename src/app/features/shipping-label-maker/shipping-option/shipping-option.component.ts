import { Component } from '@angular/core';
import { WizardData } from 'src/app/models/WizardData';
import { Shipping } from 'src/app/models/Shipping';
import { ShippingOption } from 'src/app/enum/ShippingOption';
import { WizardAction } from 'src/app/enum/WizardAction';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-shipping-option',
  templateUrl: './shipping-option.component.html',
  styleUrls: ['./shipping-option.component.css']
})
export class ShippingOptionComponent implements WizardData {

  form: FormGroup;
  public shippingOption = ShippingOption;
  public wizardAction = WizardAction;
  public wizardContext: Shipping = new Shipping();
  public visibility: Boolean;
  public status: string = null;
  
  constructor() {
    this.form = new FormGroup({
      'option': new FormControl(this.wizardContext.shippingOption, [Validators.required, Validators.min(1)])
    })
  }
  
  onAction(action?: string) {
    this.wizardContext.shippingOption = this.form.value.option;
    if( action === WizardAction[WizardAction.Prev]) {
      this.status =  action;
    } else if(this.form.valid && this.status !== WizardAction[WizardAction.Prev]) {
      this.status = WizardAction[WizardAction.Next];
    }
  }
}
