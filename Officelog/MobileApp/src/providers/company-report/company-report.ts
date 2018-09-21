import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the CompanyReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompanyReportProvider {
  baseUrl = "http://localhost:14339/api/CompanyReport"


  constructor(public http: HttpClient) {
    //console.log('Hello CompanyReportProvider Provider');
  }
  getCompanyReport(){

    return this.http.get(this.baseUrl);
  }
}
