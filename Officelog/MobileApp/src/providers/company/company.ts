import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import  'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import { ServiceBase } from '../../shared/shared-base';

/*
  Generated class for the CompanyProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CompanyProvider extends ServiceBase<ICompany> {
 
 
  

  constructor(public http: HttpClient) {
    super(http,'http://localhost:14339/api/Companies')

  }

  getCompanies(fromDate : Date,toDate : Date):Observable<ICompany[]>{
        return this.http.get<ICompany[]>(`${this.baseUrl}?fromDate=${fromDate.toDateString()}&toDate=${toDate.toDateString()}`);
  }
  

  intializeObject(): ICompany {
    return {
      id : 0,
      name : ''
    }
  }
  

}


export interface ICompany{
  id: number;
  name: string;
}



