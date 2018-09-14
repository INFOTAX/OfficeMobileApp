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
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    CompanyListPage,
    CompanyFormPage,
    TabsPage,
    MarketingLogFormPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    HttpClientModule,
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
    MarketingLogFormPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    CompanyProvider
  ]
})
export class AppModule {}
