import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CompanyProvider } from '../providers/company/company';
import { CompanyListPage } from '../pages/company-list/company-list';
import { HttpClientModule } from '@angular/common/http';
import {HttpModule} from '@angular/http';
import { CompanyFormPage } from '../pages/company-form/company-form';
import { MarketingLogFormPage } from '../pages/marketing-log-form/marketing-log-form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MarketingListPage } from '../pages/marketing-list/marketing-list';
import { MarketingProvider } from '../providers/marketing/marketing';
import { UserprofilePage } from '../pages/userprofile/userprofile';
import { UserloginPage } from '../pages/userlogin/userlogin';
import { ConversionProvider } from '../providers/conversion/conversion';
import { ConversionFormPage } from '../pages/conversion-form/conversion-form';
import { ConversionListPage } from '../pages/conversion-list/conversion-list';
import { MarketingReportProvider } from '../providers/marketing-report/marketing-report';
import { AdminUserProfileMarketingReportPage } from '../pages/admin-user-profile-marketing-report/admin-user-profile-marketing-report';
import { AdminUserProfileCompanyReportPage } from '../pages/admin-user-profile-company-report/admin-user-profile-company-report';
@NgModule({
  declarations: [
    MyApp,
    UserloginPage,
    UserprofilePage,
    AboutPage,
    ContactPage,
    HomePage,
    CompanyListPage,
    CompanyFormPage,
    AdminUserProfileCompanyReportPage,
    TabsPage,
    MarketingLogFormPage,
    MarketingListPage,
    ConversionFormPage,
    ConversionListPage,
    AdminUserProfileMarketingReportPage,
 
    
   
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
   
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    TabsPage,
    CompanyListPage,
    CompanyFormPage,
    UserprofilePage,
    UserloginPage,
    AdminUserProfileCompanyReportPage,
    MarketingLogFormPage,
    MarketingListPage,
    ConversionFormPage,
    ConversionListPage,
    AdminUserProfileMarketingReportPage,
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CompanyProvider,
    MarketingProvider,
    ConversionProvider,
    MarketingReportProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    
    
    
  ]
})
export class AppModule {}
