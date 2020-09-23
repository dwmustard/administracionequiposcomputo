import { DocumentService } from './../document.service';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { DateRange } from '../models/date.interface';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService, private Document: DocumentService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onClickMe() {
    this.Auth.logout();
    this.router.navigate(['']);
  }
  generatePdf(){
    this.http.get<any>('https://a301935backend.azurewebsites.net/document/userLogs/')
    .subscribe((data) => {
      console.log(data);
      pdfMake.createPdf(data).open();
    });
   }
  createUserLogs(){
    this.Document.createUserLogs();
  }
  createUserLogsByUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    this.Document.createUserLogsByUser(username);
  }
  createUserLogsByDate(event){
    event.preventDefault();
    const target = event.target;
    const range = target.querySelector('#range').value;
    this.Document.createUserLogsByDate(range);
  }
  createUserLogsByDateUser(event){
    event.preventDefault();
    const target = event.target;
    const username = target.querySelector('#username').value;
    const range = target.querySelector('#range').value;
    this.Document.createUserLogsByDateUser(username, range);
  }
}
