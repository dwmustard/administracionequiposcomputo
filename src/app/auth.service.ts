import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';

interface myData{
  username: boolean,
  password: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  loggedInStatus = false
  getLoggedInStatus(){
    return this.loggedInStatus
  }
  setLoggedInStatus(value: boolean){
    this.loggedInStatus = value
  }

  constructor(private http: HttpClient) {}

  getUserDetails(username, password){
    return this.http.post<myData>('https://a301935backend.azurewebsites.net/user/validate',{
      username,
      password
      })
  }
}
