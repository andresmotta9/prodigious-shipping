import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { WizardComponentComponent } from './shared/wizard-component/wizard-component.component';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker/shipping-label-maker.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';
import { PersonAddressComponent } from './features/shipping-label-maker/person-address/person-address.component';
import { WizardHeaderComponentComponent } from './shared/wizard-header-component/wizard-header-component.component';
import { ShippingLabelComponent } from './features/shipping-label-maker/shipping-label/shipping-label.component';
import { WizardStepComponent } from './shared/wizard-step/wizard-step.component';
import { ShippingWeightComponent } from './features/shipping-label-maker/shipping-weight/shipping-weight.component';
import { ShippingOptionComponent } from './features/shipping-label-maker/shipping-option/shipping-option.component';
import { ShippingConfirmComponent } from './features/shipping-label-maker/shipping-confirm/shipping-confirm.component';
import { LoginComponent } from './features/shipping-label-maker/login/login.component';
import { ObjectKeysPipe } from './pipes/object-keys.pipe';
import { EnumoptionPipe } from './pipes/enumoption.pipe';
import { ShippingNavbarComponent } from './features/shipping-label-maker/shipping-navbar/shipping-navbar.component';
import { AuthService } from "./services/auth.service";


@NgModule({
  declarations: [
    AppComponent,
    WizardComponentComponent,
    ShippingLabelMakerComponent,
    PersonAddressComponent,
    WizardHeaderComponentComponent,
    ShippingLabelComponent,
    WizardStepComponent,
    ShippingWeightComponent,
    ShippingOptionComponent,
    ShippingConfirmComponent,
    LoginComponent,
    ObjectKeysPipe,
    EnumoptionPipe,
    ShippingNavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule.forRoot(),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
