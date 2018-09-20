import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketingProvider, IMarketinglog } from '../../providers/marketing/marketing';
import { MarketingLogFormPage } from '../marketing-log-form/marketing-log-form';

/**
 * Generated class for the MarketingListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketing-list',
  templateUrl: 'marketing-list.html',
})
export class MarketingListPage {
  marketing: IMarketinglog[];
  selectedMarketingLog:IMarketinglog;
  fromDate : Date;
  toDate : Date;
  id: number;
  // name: string;
  // contactNumber:string;
  // softwareInterested: string;
  // rateUs: string;
  // fee:number;
  // serviceInterested: string;
  // rateUsForNo: string;
  // currentScenario: string;
  // suggestionForNo: string;
  // suggestionForYes: string;
  // area: string; 

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private marketingProvider: MarketingProvider) {
  }

  ionViewDidLoad() {
    
  }

  searchByDate(){
    this.marketingProvider.getMarketing(this.fromDate,this.toDate).subscribe(res => this.marketing = res);
 }
marketingform(){
  this.navCtrl.push(MarketingLogFormPage);
}
deleteList(index) {
  this.selectedMarketingLog=index;
  this.marketingProvider.delete(this.selectedMarketingLog.id).subscribe(() =>{
    this.searchByDate();
    
});
}
// onRowSelect(event) { 
//   this.id = event.data.id;
//   console.log(this.id)
//   this.navCtrl.push( MarketingLogFormPage);
// }
edit(){
  //this.navParams.get('MarketingLogFormPage');
  this.navCtrl.push(MarketingLogFormPage,this.id);
}

}
