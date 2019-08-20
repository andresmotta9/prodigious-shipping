import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WizardHeaderComponentComponent } from './wizard-header-component.component';

describe('WizardHeaderComponentComponent', () => {
  let component: WizardHeaderComponentComponent;
  let fixture: ComponentFixture<WizardHeaderComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WizardHeaderComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WizardHeaderComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
