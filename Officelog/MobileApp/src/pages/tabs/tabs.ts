import { Component } from '@angular/core';
import { CompanyListPage } from '../company-list/company-list';
import { MarketingListPage } from '../marketing-list/marketing-list';
import { AdminUserwiseDashboardReportPage } from '../admin-userwise-dashboard-report/admin-userwise-dashboard-report';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompanyListPage;
  tab2Root = MarketingListPage;
  tab3Root = AdminUserwiseDashboardReportPage;
  constructor() {

  }
}
