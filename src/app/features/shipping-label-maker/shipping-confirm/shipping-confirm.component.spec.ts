import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingConfirmComponent } from './shipping-confirm.component';

describe('ShippingConfirmComponent', () => {
  let component: ShippingConfirmComponent;
  let fixture: ComponentFixture<ShippingConfirmComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingConfirmComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingConfirmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
