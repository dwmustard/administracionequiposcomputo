import { DateRange } from './models/date.interface';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import pdfMake from 'pdfmake/build/pdfmake';
import pdfFonts from 'pdfmake/build/vfs_fonts';
import { from } from 'rxjs';
pdfMake.vfs = pdfFonts.pdfMake.vfs;

@Injectable({
  providedIn: 'root'
})
export class DocumentService {

  constructor(private http: HttpClient) { }

  createUserLogs(){
    this.http.get<any>('https://a301935backend.azurewebsites.net/document/userLogs/')
    .subscribe((data) => {
      pdfMake.createPdf(data).open();
    });
  }

  createUserLogsByUser(username: string){
    this.http.post<any>('https://a301935backend.azurewebsites.net/document/userLogs/' + username, {})
    .subscribe((data) => {
      pdfMake.createPdf(data).open();
    });
  }

  createUserLogsByDate(range: DateRange){
    this.http.post<any>('https://a301935backend.azurewebsites.net/document/userLogs/byDate', range)
    .subscribe((data) => {
      pdfMake.createPdf(data).open();
    });
  }

  createUserLogsByDateUser(username: string, range: DateRange){
    this.http.post<any>('https://a301935backend.azurewebsites.net/document/userLogs/byDateUser/' + username, range)
    .subscribe((data) => {
      pdfMake.createPdf(data).open();
    });
  }
}
