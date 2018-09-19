import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMarketinglog } from '../../providers/marketing/marketing';
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
  marketing: IMarketinglog;
  fromDate : Date;
  toDate : Date;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketingListPage');
  }

  searchByDate(){
    //this.companyProvider.getCompanies(this.fromDate,this.toDate).subscribe(res => this.companies = res);
 }
marketingform(){
  this.navCtrl.push(MarketingLogFormPage);
}

}
