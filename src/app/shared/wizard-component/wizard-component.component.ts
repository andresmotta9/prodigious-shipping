import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizard-component',
  templateUrl: './wizard-component.component.html',
  styleUrls: ['./wizard-component.component.css']
})
export class WizardComponentComponent implements OnInit {
  
  progress: number = 50;

  constructor() { }

  ngOnInit() {
  }

}
