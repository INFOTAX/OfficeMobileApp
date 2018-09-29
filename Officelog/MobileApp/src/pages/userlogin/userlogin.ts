import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider } from '../../providers/auth/auth';
import { NgForm } from '@angular/forms';

/**
 * Generated class for the UserloginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userlogin',
  templateUrl: 'userlogin.html',
})
export class UserloginPage {

  constructor(public navCtrl: NavController, public navParams: NavParams ,private authprovider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }
 onUserLogin( form:NgForm){
  
 }








  login(){
    this.navCtrl.push(TabsPage);
  }

}
