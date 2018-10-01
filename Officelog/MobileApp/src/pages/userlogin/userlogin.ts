import { Subscription } from 'rxjs/Subscription';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AuthProvider, ILogin } from '../../providers/auth/auth';
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

  busy:Subscription
  login:ILogin;

  constructor(public navCtrl: NavController, public navParams: NavParams ,private authprovider: AuthProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad UserloginPage');
  }
 onUserLogin( form:NgForm){
  
 }
 








  doLogin(userName: string, password: string):void{

    var online= navigator.onLine;
        if(!online){
            
        }

        this.login = {
          userName: userName,
          password: password
      };


          this.busy = this.authprovider.getToken(this.login)
              .subscribe(res => {
                  // if (res. === 200)
                      this.onLoginSuccess();
              });
    //this.navCtrl.push(TabsPage);
  }

  onLoginSuccess(): void {
    this.navCtrl.push(TabsPage);

}

}
