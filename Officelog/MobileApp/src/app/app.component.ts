import { Component, ViewChild } from '@angular/core';
import { Nav,Platform, App } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { AuthProvider } from '../providers/auth/auth';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {

  rootPage:any = UserloginPage;
  

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen,
              private appCtrl: App, public authProvider: AuthProvider) {

    
    platform.ready().then(() => {
      statusBar.styleDefault();
      splashScreen.hide();
    });

    // this.pages=[
    //   {title:'Home', component:TabsPage},
    //   {title:'User',component:UserprofilePage},
    //   {title:'Conversion List',component:ConversionListPage},
    //   {title:'Marketing Report',component:AdminUserProfileMarketingReportPage},
    //   {title: 'Company Report', component:AdminUserProfileCompanyReportPage},
    //   {title: 'Consolidated Marketing Report', component: AdminConsolidatedMarketingReportingPage},
    //   {title: 'Consolidated Company Report', component: AdminConsolidatedCompanyReportingPage}
    // ];
    // this.activePage=this.pages[0];
    
  }
  
}
