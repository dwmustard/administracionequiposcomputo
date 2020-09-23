import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

  constructor(private Auth: AuthService, private router: Router, private http: HttpClient) { }

  ngOnInit(): void {
  }
  onClickMe() {
    this.Auth.logout();
    this.router.navigate(['']);
  }
  generatePdf(){
    /*
    const documentDefinition = { content: 'This is an sample PDF printed with pdfMake' };
    pdfMake.createPdf(documentDefinition).open();
    */
    this.http.get<any>('https://a301935backend.azurewebsites.net/document/userLogs/byUser/Admin')
    .subscribe((data) => {
      console.log(data);
      pdfMake.createPdf(data).open();
    });
   }
}
