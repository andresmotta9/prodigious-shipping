import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shipping-label-maker',
  templateUrl: './shipping-label-maker.component.html',
  styleUrls: ['./shipping-label-maker.component.css']
})
export class ShippingLabelMakerComponent implements OnInit {

  progress: number = 50;

  constructor() { }

  ngOnInit() {
  }
}
