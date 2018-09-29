import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModelForCompanyListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-model-for-company-list',
  templateUrl: 'filter-model-for-company-list.html',
})
export class FilterModelForCompanyListPage implements OnInit {

  public showYes =false;
  public showNo=false;
  public queryHandling=false;
  public serviceProvided=false;
  public visitorType=false;
  filterApplied=true;
  fromDate :string;
  toDate : string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  
    ngOnInit() {
      this.toDate= new Date().toISOString();
    
      this.fromDate= new Date().toISOString();
    
  }


  ionViewDidLoad() {
   // console.log('ionViewDidLoad FilterModelForCompanyListPage');
  } 

  apply(){
    let filterState={
      showYes: this.showYes,
      showNo: this.showNo,
      queryHandling: this.queryHandling,
      serviceProvided: this.serviceProvided,
      visitorType: this.visitorType,
      fromDate: this.fromDate, 
      toDate: this.toDate,
      filterApplied: this.filterApplied
    };
    this.viewController.dismiss(filterState);
    console.log(filterState);
  }

  closeModel(){
    let filterState={
      showYes: null,
      showNo: null,
      queryHandling: null,
      serviceProvided: null,
      visitorType: null,
      fromDate: null,
      toDate: null,
      filterApplied: null
    };
    this.viewController.dismiss(filterState);
  }

  filterByDate(){
    let filterState={
      showYes: null,
      showNo: null,
      queryHandling: null,
      serviceProvided: null,
      visitorType: null,
      fromDate: this.fromDate, 
      toDate: this.toDate,
      filterApplied: this.filterApplied
    };
    this.viewController.dismiss(filterState);
  }


}
