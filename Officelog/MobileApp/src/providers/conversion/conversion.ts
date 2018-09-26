import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { IMarketinglog } from '../marketing/marketing';


/*
  Generated class for the ConversionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ConversionProvider { 
  
  baseUrl='http://localhost:14339/api/conversions';
  constructor(public http: HttpClient) {
    //super(http,'http://localhost:14339/api/Conversions');
  
  }

  getConversions(){
      return this.http.get(`${this.baseUrl}`);
    }


}
