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
import { AdminUserProfileMarketingReportPage } from '../admin-user-profile-marketing-report/admin-user-profile-marketing-report';
import { AdminUserProfileCompanyReportPage } from '../admin-user-profile-company-report/admin-user-profile-company-report';

// import { CompanyFormPage } from '../company-form/company-form';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = CompanyListPage;
  tab3Root = MarketingListPage;
  constructor() {

  }
}
