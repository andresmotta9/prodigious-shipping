import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { User } from 'src/app/models/User';
import { AuthService } from 'src/app/services/auth.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public user: User = new User();
  isAuthenticated: boolean = false;
  form: FormGroup;

  constructor(private auth:AuthService,
              private router: Router) {
    this.form = new FormGroup({
      'email': new FormControl('', Validators.required),
      'password': new FormControl('', [Validators.required, Validators.minLength(5)])
    })
  }

  login() {
    if(this.form.valid) {
      this.user = this.form.value;
      this.isAuthenticated = this.auth.login(this.user);
      if(!this.isAuthenticated) {
        Swal.fire({
          allowOutsideClick: false,
          type: 'error',
          text: 'The user is not registered'
        })
      } else {
        this.router.navigateByUrl('/home');
      }
    }
  }

  ngOnInit() {
  }

}
