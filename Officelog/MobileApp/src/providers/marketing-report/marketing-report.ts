import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the MarketingReportProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarketingReportProvider {

  baseUrl = "http://localhost:14339/api/MarketingReport"

  constructor(public http: HttpClient) {
    //console.log('Hello MarketingReportProvider Provider');
  }
  getMarketingReports(){

    return this.http.get(this.baseUrl);
  }

  getConversionReports(){
    return this.http.get(`${this.baseUrl}/Converted`)
  }

}
