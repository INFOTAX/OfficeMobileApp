import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, Nav, App } from 'ionic-angular';
import { AuthProvider } from '../../providers/auth/auth';
import { AdminConsolidatedMarketingReportingPage } from '../admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting';
import { AdminConsolidatedCompanyReportingPage } from '../admin-consolidated-company-reporting/admin-consolidated-company-reporting';
import { TabsPage } from '../tabs/tabs';
import { UserprofilePage } from '../userprofile/userprofile';
import { ConversionListPage } from '../conversion-list/conversion-list';
import { AdminUserProfileMarketingReportPage } from '../admin-user-profile-marketing-report/admin-user-profile-marketing-report';
import { AdminUserProfileCompanyReportPage } from '../admin-user-profile-company-report/admin-user-profile-company-report';
import { UserloginPage } from '../userlogin/userlogin';


@IonicPage()
@Component({
  selector: 'page-side-menu',
  templateUrl: 'side-menu.html',
})
export class SideMenuPage{

  rootPage:any;
  username='';
  activePage:any;
  pages: Array<{title: string, component:any}>;

  @ViewChild(Nav) nav:Nav;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              private appCtrl: App, public authProvider: AuthProvider) {
               
  }
  
  ionViewWillEnter() {
    if (this.authProvider.isAdmin()) {
      this.rootPage=AdminConsolidatedMarketingReportingPage;
      this.pages = [
      {title: 'Consolidated Marketing Report', component: AdminConsolidatedMarketingReportingPage},
      {title: 'Consolidated Company Report', component: AdminConsolidatedCompanyReportingPage}
      ];
      this.openPage(AdminConsolidatedMarketingReportingPage);
  }
  else {
    this.rootPage=TabsPage;
    this.pages = [
      {title:'Home', component:TabsPage},
      {title:'User',component:UserprofilePage},
      {title:'Conversion List',component:ConversionListPage},
      {title:'Marketing Report',component:AdminUserProfileMarketingReportPage},
      {title: 'Company Report', component:AdminUserProfileCompanyReportPage},
    ];
    this.openPage(TabsPage);
    this.activePage=this.pages[0];
  }
  this.username = this.authProvider.userName;

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuPage');
  }
  openPage(page){
    this.nav.setRoot(page);
    this.activePage=page;
  }
  checkActive(page){
   return page==this.activePage;
  }

 logout(){
  this.authProvider.logout();
  this.appCtrl.getRootNav().setRoot(UserloginPage)
 }

 

}
