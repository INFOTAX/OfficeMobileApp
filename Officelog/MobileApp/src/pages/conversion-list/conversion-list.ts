import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMarketinglog } from '../../providers/marketing/marketing';
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
  searchTerm: string = '';
  id:number;
  marketing: IMarketinglog;
  selected=false;
  items:any;
  current: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public conversionProviders: ConversionProvider) {
  }

  ngOnInit() {
    this.getConversionList();
    this.initializeItems();
    //this.setFilteredItems();
    //console.log(this.listDetails.nativeElement);
  }
  getConversionList(){
    this.conversionProviders.getConversions().subscribe(response=>{
      this.conversionList=response
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionListPage');
  }
  initializeItems(){
   this.items=this.conversionList;
  }

  edit(event) {
    this.id = event.id;
    console.log(this.id)
    this.navCtrl.push(ConversionFormPage,{id: this.id});
  }
  setFilteredItems(ev: any) {
 
    //this.items = i;
    this.initializeItems();

    // set val to the value of the searchbar
    const val = ev.id;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.any.toLowerCase().indexOf(val.toLowerCase()) > 0);
      })
    }
    

}
 
itemSelected(){
  if(this.selected==true){
    this.selected=false;
  }
  else{
    this.selected=true;
  }
  
}


}
