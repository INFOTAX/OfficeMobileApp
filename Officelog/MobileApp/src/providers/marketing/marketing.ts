import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ServiceBase } from '../../shared/shared-base';

import { ServiceItems } from "../../pages/marketing-log-form/marketing-log-form";

/*
  Generated class for the MarketingProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class MarketingProvider extends ServiceBase<IMarketinglog> {

  constructor (public http: HttpClient){
    super(http,'http://localhost:14339/api/Marketings')
}



  getMarketing(fromDate : string,toDate : string):Observable<IMarketinglog[]>{
    return this.http.get<IMarketinglog[]>(`${this.baseUrl}?fromDate=${fromDate}&toDate=${toDate}`);
}

conversion(marketingLog : IMarketinglog,id: number) : Observable<IMarketinglog>{
  return this.http.patch<IMarketinglog>(`${this.baseUrl}/converted?id=${id}`,marketingLog);
}

  intializeObject(): IMarketinglog { 
    return {
id: 0,
name: '',
contactNumber: 0,
softwareInterested: '',
rateUs: '',
serviceInterested: '',
rateUsForNo: '',
currentScenario: '',
suggestionForNo: '',
suggestionForYes: '',
area: '',
fee: 0,
date: new Date(),
Conversion:'',
serviceItems : []
    }}

}

export interface IMarketinglog{
  id: number;
  name: string;
  contactNumber: number;
  softwareInterested: string;
  rateUs: string;
  serviceInterested: string;
  rateUsForNo: string;
  currentScenario: string;
  suggestionForNo: string;
  suggestionForYes: string;
  area: string;
  fee: number;
  date:Date;
  Conversion:string;
  serviceItems : ServiceItems[];

}
