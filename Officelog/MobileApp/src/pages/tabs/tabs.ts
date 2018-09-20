import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CompanyListPage } from '../company-list/company-list';
//import { MarketingLogFormPage } from '../marketing-log-form/marketing-log-form';
import { MarketingListPage } from '../marketing-list/marketing-list';
import { UserprofilePage } from '../userprofile/userprofile';
import { UserloginPage } from '../userlogin/userlogin';
import { ConversionListPage } from '../conversion-list/conversion-list';

// import { CompanyFormPage } from '../company-form/company-form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompanyListPage;
  tab3Root = MarketingListPage;
  tab4Root = UserprofilePage;
  tab5Root = UserloginPage;
  tab6Root = ConversionListPage;
  constructor() {

  }
}
