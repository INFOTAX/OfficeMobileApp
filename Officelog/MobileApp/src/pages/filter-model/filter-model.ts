import { Component } from '@angular/core';
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
export class FilterModelPage {

  public showYes =false;
  public showNo=false;
  public serviceYes =false;
  public serviceNo=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public viewController: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FilterModelPage');
  }

  selectFilter(){
    
  }

  closeModel(){
    let filterState={
      showYes: this.showYes,
      showNo: this.showNo,
      serviceYes: this.serviceYes,
      serviceNo:this.serviceNo
    };
    this.viewController.dismiss(filterState);
    console.log(filterState);
  }

}
