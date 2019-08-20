import { Component, OnInit } from '@angular/core';
import { Shipping } from 'src/app/models/Shipping';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit {

  public wizardContext: Shipping = new Shipping();
  public stepsDone: Boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showDetail( event: Shipping) {
    this.wizardContext = event;
    this.stepsDone = true;
  }
}
