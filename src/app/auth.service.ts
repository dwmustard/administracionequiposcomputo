import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false

  constructor() { }

  getUserDetails(username, password){
    this.loggedInStatus = (username === 'a301935' && password === 'pass')
    return this.loggedInStatus
  }
}
