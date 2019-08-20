import { Component, Input } from '@angular/core';
import { WizardData } from 'src/app/models/WizardData';
import { Shipping } from 'src/app/models/Shipping';
import { ShippingOption } from 'src/app/enum/ShippingOption';
import { WizardAction } from 'src/app/enum/WizardAction';

@Component({
  selector: 'app-shipping-confirm',
  templateUrl: './shipping-confirm.component.html',
  styleUrls: ['./shipping-confirm.component.css']
})
export class ShippingConfirmComponent implements WizardData {

  @Input() confirm: Boolean = false;
  @Input() visibility: Boolean = false;
  public wizardAction = WizardAction;
  shippingOption = ShippingOption;
  @Input() wizardContext: Shipping = new Shipping();
  public status: string = null;
  
  constructor() {
   }
  
  getCost() {
    const shippingRate = 0.40;
    return  (this.wizardContext.weight * shippingRate * 
    (this.wizardContext.shippingOption === ShippingOption.Ground ? 1 : 1.5)).toFixed(2);

  }
  
  onAction (action?: string) {
    this.status = action
  };
}
