import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMarketinglog, MarketingProvider } from '../../providers/marketing/marketing';
import { ConversionProvider } from '../../providers/conversion/conversion';
import { ConversionFormPage } from '../conversion-form/conversion-form';

/**
 * Generated class for the ConversionListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversion-list',
  templateUrl: 'conversion-list.html',
})
export class ConversionListPage implements OnInit{
  conversionList;
  //selectedConversionList: IMarketinglog;
  id:number;
  marketing: IMarketinglog;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public conversionProviders: ConversionProvider) {
  }

  ngOnInit() {
    this.getConversionList();
  }
  getConversionList(){
    this.conversionProviders.getConversions().subscribe(response=>{
      this.conversionList=response
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionListPage');
  }

  edit(event) {
    //this.navParams.get('MarketingLogFormPage');
    this.id = event.id;
    console.log(this.id)
    this.navCtrl.push(ConversionFormPage,{id: this.id});
  }

}
