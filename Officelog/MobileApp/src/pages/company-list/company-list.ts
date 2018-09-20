import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CompanyProvider, ICompany } from '../../providers/company/company';
import { HttpClient } from '@angular/common/http';
import { RequestOptions } from '@angular/http';
import { AlertController } from 'ionic-angular';
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
  company : ICompany[];
  selectedCompanyLog: ICompany;
  msgs: Message[] = [];
  displayDialogDelete : boolean;
  CompanySummary:any[];
  cols: any[];
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

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private companyProvider : CompanyProvider,
      public alertCtrl: AlertController )
      {
  }
  ngOnInit() {
    this.toDate=new Date();
   this.fromDate=new Date();
  this.searchByDate(this.fromDate,this.toDate);
  
}


companyform(){
  this.navCtrl.push(CompanyFormPage);
}
onAddc() {
  this.id=0;
  this.navCtrl.push(CompanyFormPage, this.id)
}

deleteList(index) {
  const confirm = this.alertCtrl.create({
    title:'DELETE CONFIRMATION',
    message:'Select CONFIRM to delete your record !',
    buttons:[
      {
        text : 'CONFIRM',
        handler:()=>{
          this.selectedCompanyLog=index;
          this.companyProvider.delete(this.selectedCompanyLog.id).subscribe(() =>{
            this.searchByDate(this.fromDate,this.toDate);
         
        });    
        }
      },
      {
        text :'CANCEL',
        handler:()=>{

        }
      }
    ]
  });
  confirm.present ();
}
  ionViewDidLoad() {
    
    
    
    
  }
  searchByDate(fromDate:Date,toDate:Date){
    this.companyProvider.getCompanies(this.fromDate,this.toDate).subscribe(companyList => {
      this.company = companyList;
    });

 
}
/*search by date end*/


}