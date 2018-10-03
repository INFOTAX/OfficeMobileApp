import { Subscription } from 'rxjs/Subscription';
import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav } from 'ionic-angular';
import { AuthProvider, ILogin } from '../../providers/auth/auth';
import { NgForm } from '@angular/forms';
import { SideMenuPage } from '../side-menu/side-menu';


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
  @ViewChild(Nav) nav:Nav;

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
    
  }

  onLoginSuccess(): void {
    
    this.navCtrl.setRoot(SideMenuPage);

// }

}
}
