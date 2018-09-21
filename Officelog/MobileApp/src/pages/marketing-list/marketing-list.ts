import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketingProvider, IMarketinglog } from '../../providers/marketing/marketing';
import { MarketingLogFormPage } from '../marketing-log-form/marketing-log-form';
import { AlertController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-marketing-list',
  templateUrl: 'marketing-list.html',
})
export class MarketingListPage {
  marketing: IMarketinglog[];
  selectedMarketingLog: IMarketinglog;
  fromDate: Date;
  toDate: Date;
  id: number;
 

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marketingProvider: MarketingProvider,
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {

  }

  searchByDate() {
    this.marketingProvider.getMarketing(this.fromDate, this.toDate).subscribe(res => this.marketing = res);
    
  }
  marketingform() {
    this.id=0;
    this.navCtrl.push(MarketingLogFormPage,{id: this.id});
  }
 


  deleteList(index) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'This will delete your data',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.selectedMarketingLog = index;
            this.marketingProvider.delete(this.selectedMarketingLog.id).subscribe(() => {
              this.searchByDate();
            });
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  patchConversion(index){
    this.selectedMarketingLog = index;
    this.marketingProvider.conversion(this.selectedMarketingLog,this.selectedMarketingLog.id).subscribe(() =>{
      this.searchByDate();
    })
  }

  
  edit(event) {
    //this.navParams.get('MarketingLogFormPage');
    this.id = event.id;
    console.log(this.id)
    this.navCtrl.push(MarketingLogFormPage,{id: this.id});
  }

}
