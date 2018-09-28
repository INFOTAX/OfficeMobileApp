import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { IMarketinglog } from '../../providers/marketing/marketing';
import { ConversionProvider } from '../../providers/conversion/conversion';
import { ConversionFormPage } from '../conversion-form/conversion-form';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/map';

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
  id:number;
  marketing: IMarketinglog;
  selected=false;
  current: number = 0;
  items:any;
  searchTerm: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams,
              public conversionProviders: ConversionProvider) {
               
  }

  ngOnInit() {
    this.getConversionList();
    
  }
  getConversionList(){
    this.conversionProviders.getConversions().subscribe(response=>{
      this.conversionList=response;
      //this.generateTopics(this.conversionList);
    }); 
  }

  ionViewDidLoad() {
    this.getTopics();
  }


  edit(event) {
    this.id = event.id;
    console.log(this.id)
    this.navCtrl.push(ConversionFormPage,{id: this.id});
  }

 
itemSelected(){
  if(this.selected==true){
    this.selected=false;
  }
  else{
    this.selected=true;
  }
  
}
// generateTopics() {
//  this.conversionProviders.getConversions().subscribe(data=>{
//    this.conversionList=data;
//    this.items = data;
//   //  let name=this.items.name;
//     console.log(this.conversionList);
//  })
// }

getTopics() {
  // this.generateTopics();
  // let serVal = ev.target.value;
  // console.log(serVal);
  // if (serVal && serVal.trim() != '') {
  //   this.items = this.items.filter((item) => {
      
  //     return (item.conversionList.toLowerCase().indexOf(serVal.toLowerCase()) > -1);
  //   })
  // }
  // console.log(this.items);
  this.items = this.filterItems(this.searchTerm);
}

filterItems(searchTerm){
 
  return this.conversionList.filter((item) => {
      return item.name.toLowerCase().indexOf(searchTerm.toLowerCase()) > -1;
  });    

}


}
