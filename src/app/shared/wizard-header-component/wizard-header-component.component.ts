import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-header-component',
  templateUrl: './wizard-header-component.component.html',
  styleUrls: ['./wizard-header-component.component.css']
})
export class WizardHeaderComponentComponent implements OnInit {

  public progress: number = 0;

  constructor() { }

  ngOnInit() {
  }

}
