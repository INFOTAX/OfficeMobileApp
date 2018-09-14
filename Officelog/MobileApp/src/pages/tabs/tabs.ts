import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CompanyListPage } from '../company-list/company-list';
import { MarketingLogFormPage } from '../marketing-log-form/marketing-log-form';
// import { CompanyFormPage } from '../company-form/company-form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompanyListPage;
  tab3Root = MarketingLogFormPage;

  constructor() {

  }
}
