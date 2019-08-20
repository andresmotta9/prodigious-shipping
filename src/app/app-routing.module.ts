import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ShippingLabelMakerComponent } from './features/shipping-label-maker/shipping-label-maker/shipping-label-maker.component';
import { LoginComponent } from './features/shipping-label-maker/login/login.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  { path: 'home', component: ShippingLabelMakerComponent, canActivate: [ AuthGuard ]},
  { path: 'login', component: LoginComponent},
  { path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
