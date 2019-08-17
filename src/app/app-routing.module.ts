import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker/shipping-label-maker.component';
import { WizardComponentComponent } from './shared/wizard-component/wizard-component.component';


const routes: Routes = [
  { path: 'home', component: ShippingLabelMakerComponent},
  { path: 'wizard', component: WizardComponentComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
