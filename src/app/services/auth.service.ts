import { Injectable } from '@angular/core';
import { User } from '../models/User';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  login(user: User): boolean {
    if(user.email === "administrador" && user.password === "4dm1n127r4d0r") {
      localStorage.setItem('token', 'sdk2393#Ff3$dsk23FRf4dq34#$Frf338')
      return true;
    } else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('token');
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('token') == 'sdk2393#Ff3$dsk23FRf4dq34#$Frf338' ? true: false;
  }
}
