import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the AdminConsolidatedReportingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AdminConsolidatedReportingProvider {

  baseUrl="http://localhost:14339/api/AdminConsolidatedReport"

  constructor(public http: HttpClient) {
    //console.log('Hello AdminConsolidatedReportingProvider Provider');
  }

  getMarketingReport(){
    return this.http.get(`${this.baseUrl}/Marketings`);
    
  }
  getConversionReport(){
    return this.http.get(`${this.baseUrl}/Conversions`);
  }
  getCompanyReport(){
   return this.http.get(`${this.baseUrl}/Companies`)
  }

}
