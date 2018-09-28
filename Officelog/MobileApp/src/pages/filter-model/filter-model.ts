import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the FilterModelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-filter-model',
  templateUrl: 'filter-model.html',
})
export class FilterModelPage implements OnInit{

  public softwareInterested =false;
  public serviceInterested=false;
  fromDate :string;
  toDate : string;
  filterApplied =true;
  

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  ngOnInit() { 
    this.toDate= new Date().toISOString();
  
    this.fromDate= new Date().toISOString();
  
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModelPage');
  }

  selectFilter(){
    
  }

  closeModel(){

    let filterState={
      softwareInterested: null,
      serviceInterested: null,
      fromDate: null,
      toDate: null,
      filterApplied: null
    };
    this.viewController.dismiss(filterState);
    
  }

  apply(){
    let filterState={
      softwareInterested: this.softwareInterested,
      serviceInterested: this.serviceInterested,
      fromDate: this.fromDate,
      toDate: this.toDate,
      filterApplied: this.filterApplied
    };
    this.viewController.dismiss(filterState);
    console.log(filterState);
  }
  
}
