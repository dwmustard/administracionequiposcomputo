import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }


  loginUser(event) {
    event.preventDefault()
    const target = event.target
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.Auth.getUserDetails(username,password).subscribe(data => {
    
      this.Auth.setLoggedInStatus(data.name != null);
      if(this.Auth.loggedInStatus){
        this.router.navigate['admin'];
      }else{
        window.alert(this.Auth.loggedInStatus);
      }
    /*  }
      this.router.navigate['admin']
      console.log(this.router.navigate['admins'])
     //this.user = data
    // console.log(data.name)
   //  this.Auth.loggedInStatus = data.name == null
      /* if(data.name != null) {
        this.user = data
        this.Auth.loggedInStatus = true
        
      }else{
        window.alert('Credenciales invalidas')
      }*/
    });
  }

}
