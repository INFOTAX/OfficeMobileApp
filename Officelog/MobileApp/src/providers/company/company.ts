import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the CompanyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompanyProvider {
  baseUrl = "http://localhost:14339/api/Companies";
  

  constructor(public http: HttpClient) {
    

  }

  getCompanies(fromDate : Date,toDate : Date):Observable<ICompany[]>{
        return this.http.get<ICompany[]>(`${this.baseUrl}?fromDate=${fromDate.toDateString()}&toDate=${toDate.toDateString()}`);
        
        
        
        
        
  }
  
  
  
//   public addHeaders(header:HttpHeaders){
//     header= header.append('Content-Type','text/json');
//     header = header.append('Accept','text/json');
//     header = header.append('Content-Type-Options','nosniff');
//     return header;


//    }

//    public initializeRequestOptions(reqOpts){
// if(!reqOpts){
//   reqOpts={
//     headers: new HttpHeaders(),
//     params: new HttpParams()
//   };
// }
//   return reqOpts;
// }
    }


export interface ICompany{
  id: number;
  name: string;
}



