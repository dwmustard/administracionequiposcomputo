import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface user{
  username: boolean,
  password: string,
  name: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) {}

  createUser(username,password,name){
    return this.http.post<user>('https://a301935backend.azurewebsites.net/user/',{
      username,
      password,
      name
      })
  }


}
