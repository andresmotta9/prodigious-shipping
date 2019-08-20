import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shipping-navbar',
  templateUrl: './shipping-navbar.component.html',
  styleUrls: ['./shipping-navbar.component.css']
})
export class ShippingNavbarComponent implements OnInit {

  constructor(private auth: AuthService,
              private router: Router) { }

  ngOnInit() {
  }

  logout() {
    this.auth.logout();
    this.router.navigateByUrl('/login');
  }

}
