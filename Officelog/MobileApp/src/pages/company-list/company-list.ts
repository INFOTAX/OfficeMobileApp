import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider, ICompany } from '../../providers/company/company';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CompanyFormPage} from '../company-form/company-form';
/**
 * Generated class for the CompanyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html',
})
export class CompanyListPage {
  companies : ICompany[]; 
  fromDate : Date;
  toDate : Date;
  id: number = null;
  contactNumber:string;
  queryHandling:string;
  serviceProvided :string;
  visitorType:string;
  softwareInterested:string;
  rateUs:string;
  rateUsForNo:string;
  suggestionForYes:string;
  suggestionForNo:string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
      private companyProvider : CompanyProvider   ) {
  }

  companyform(){
    this.navCtrl.push(CompanyFormPage);
  }

  ionViewDidLoad() {
    
    
    
    
  }

  searchByDate(){
     this.companyProvider.getCompanies(this.fromDate,this.toDate).subscribe(res => this.companies = res);
  }
}

  

