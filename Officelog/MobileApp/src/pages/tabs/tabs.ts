import { Component } from '@angular/core';
import { CompanyListPage } from '../company-list/company-list';
import { MarketingListPage } from '../marketing-list/marketing-list';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = CompanyListPage;
  tab2Root = MarketingListPage;
  constructor() {

  }
}
