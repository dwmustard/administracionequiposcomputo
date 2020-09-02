import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  getUserDetails(username, password){
    if(username === 'a301935' && password === 'pass'){
      return true
    }
    return false
  }
}
