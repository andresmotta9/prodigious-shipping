import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShippingWeightComponent } from './shipping-weight.component';

describe('ShippingWeightComponent', () => {
  let component: ShippingWeightComponent;
  let fixture: ComponentFixture<ShippingWeightComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShippingWeightComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShippingWeightComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
