import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { CompanyProvider, ICompany } from '../../providers/company/company';
import { HttpClient } from '@angular/common/http';

import { AlertController } from 'ionic-angular';
import { Message } from '@angular/compiler/src/i18n/i18n_ast';
import { CompanyFormPage} from '../company-form/company-form';
import { FilterModelForCompanyListPage } from '../filter-model-for-company-list/filter-model-for-company-list';
/**
 * 
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
export class CompanyListPage{

  filteredVisitorType :string;
  filteredQueryHandling :string;
  filteredServiceProvided :string;
  filteredFromDate :string;
  filteredToDate :string;

  company : ICompany[];
  selectedCompanyLog: ICompany;
  msgs: Message[] = [];
  displayDialogDelete : boolean;
  CompanySummary:any[];
  cols: any[];
  fromDate :string;
  toDate : string;
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
  current;
  filterApplied=false;
  filterNotApplied=true;
  selectedDate: string = new Date().toISOString();
 maxDate=new Date().toJSON().split('T')[0];
  
  today = new Date().toJSON().split('T')[0];
  // maxDate=new Date().toJSON().split('T')[0];

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
      private companyProvider : CompanyProvider,
      public alertCtrl: AlertController,
      public modelController: ModalController)
      {

  }

  ionViewDidLoad() {
    
    
    
    
  }
  ngOnInit() {
    this.toDate= new Date().toISOString();
  
    this.fromDate= new Date().toISOString();
  this.searchByDate(this.fromDate,this.toDate);
  
}


companyform(){
  this.id=0;
  this.navCtrl.push(CompanyFormPage,{id: this.id});
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

 searchByDate(fromDate:String,toDate:String){
    this.companyProvider.getCompanies(this.fromDate,this.toDate).subscribe(companyList => {
     this.company = companyList;
   });

 
}
/*search by date end*/
edit(event) {
  
  this.id = event.id;
  console.log(this.id)
  this.navCtrl.push(CompanyFormPage,{id: this.id});
}

openFilterModel(){
  let openFilterModel = this.modelController.create(FilterModelForCompanyListPage);
  console.log(openFilterModel);
    openFilterModel.onDidDismiss((filterState) => {

      this.companyProvider.getCompanies(this.fromDate, this.toDate).subscribe((allData) => {
        this.company = allData;
        
        


        if(filterState.visitorType && (!filterState.queryHandling && !filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.visitorType === filterState.visitorType;
          });
        }
        else if(filterState.serviceProvided && (!filterState.queryHandling && !filterState.visitorType)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.serviceProvided === filterState.serviceProvided;
          });
        }
        else if (filterState.queryHandling && (!filterState.visitorType && !filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.queryHandling === filterState.queryHandling;
          });
        }
        else if (filterState.visitorType && (filterState.queryHandling && !filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.visitorType === filterState.visitorType && data.queryHandling === filterState.queryHandling;
          });
        }
        else if (filterState.visitorType && (!filterState.queryHandling && filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.visitorType === filterState.visitorType && data.serviceProvided === filterState.serviceProvided;
          });
        }
        else if (!filterState.visitorType && (filterState.queryHandling && filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.queryHandling === filterState.queryHandling && data.serviceProvided===filterState.serviceProvided;
          });
        }
        else if (filterState.visitorType && (filterState.queryHandling && filterState.serviceProvided)) {
          this.company = allData.filter((data) => {
            this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
            return data.visitorType === filterState.visitorType && (data.queryHandling === filterState.queryHandling && data.serviceProvided === filterState.serviceProvided);
          });
        }
        else if(filterState.fromDate && filterState.toDate){
             this.filterApplied=filterState.filterApplied;
             this.filterNotApplied=false;
             this.fromDate=filterState.fromDate,
             this.toDate=filterState.toDate
             this.searchByDate(filterState.fromDate,filterState.toDate);
        }
        
        else {
          if(filterState.queryHandling==false && filterState.serviceProvided==false && filterState.visitorType==false){
            this.company=allData;
          }
          else if(filterState.queryHandling==null && filterState.serviceProvided==null && filterState.visitorType==null){
            this.company=allData;
          }
          else{
          this.company = null;
          return;}
        }

        this.filteredVisitorType=filterState.visitorType;
        this.filteredQueryHandling=filterState.queryHandling;
        this.filteredServiceProvided=filterState.serviceProvided;
        this.filteredFromDate=filterState.fromDate;
        this.filteredToDate=filterState.toDate;
        //this.filterApplied=filterState.filterApplied;
        
      })
    });
    openFilterModel.present();
  }

}