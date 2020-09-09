import { Router } from '@angular/router';
import { UserService } from './../user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrer',
  templateUrl: './registrer.component.html',
  styleUrls: ['./registrer.component.scss']
})
export class RegistrerComponent implements OnInit {

  constructor(private User: UserService, private router: Router ) { }

  ngOnInit(): void {
  }

  createUser(event) {
    event.preventDefault()
    const target = event.target
    const name = target.querySelector('#name').value
    const username = target.querySelector('#username').value
    const password = target.querySelector('#password').value
    this.User.createUser(username,password,name).subscribe(data => {
        window.alert('User created!');
    })
  }

}
