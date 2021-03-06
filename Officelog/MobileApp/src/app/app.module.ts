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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
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
import { CompanyReportProvider } from '../providers/company-report/company-report';
import { AdminConsolidatedReportingProvider } from '../providers/admin-consolidated-reporting/admin-consolidated-reporting';
import { AdminConsolidatedCompanyReportingPage } from '../pages/admin-consolidated-company-reporting/admin-consolidated-company-reporting';
import { AdminConsolidatedMarketingReportingPage } from '../pages/admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting';
import { FilterModelPage } from '../pages/filter-model/filter-model';
import { FilterModelForCompanyListPage } from '../pages/filter-model-for-company-list/filter-model-for-company-list';
import { AuthProvider } from '../providers/auth/auth';
import { TokenInterceptor } from '../providers/token.interceptor';
import { SideMenuPage } from '../pages/side-menu/side-menu';
import { AdminUserwiseDashboardReportPage } from '../pages/admin-userwise-dashboard-report/admin-userwise-dashboard-report';


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
    AdminConsolidatedMarketingReportingPage,
    AdminConsolidatedCompanyReportingPage,
    AdminUserwiseDashboardReportPage,
    FilterModelPage,
    FilterModelForCompanyListPage,
    SideMenuPage
    
   
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
    AdminUserwiseDashboardReportPage,
    AdminUserProfileMarketingReportPage,
    AdminConsolidatedMarketingReportingPage,
    AdminConsolidatedCompanyReportingPage,
    FilterModelPage,
    FilterModelForCompanyListPage,
    SideMenuPage
    
  ],
  providers: [
    StatusBar,
    SplashScreen,
    CompanyProvider,
    MarketingProvider,
    ConversionProvider,
    MarketingReportProvider,
    CompanyReportProvider,
    AdminConsolidatedReportingProvider,
    AuthProvider,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true
    }
    
    
    
    
    
    
  ]
})
export class AppModule {}
