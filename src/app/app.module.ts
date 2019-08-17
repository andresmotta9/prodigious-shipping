import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WizardComponentComponent } from './shared/wizard-component/wizard-component.component';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker/shipping-label-maker.component';
import { ProgressbarModule } from 'ngx-bootstrap/progressbar';

@NgModule({
  declarations: [
    AppComponent,
    WizardComponentComponent,
    ShippingLabelMakerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ProgressbarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
