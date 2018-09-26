import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FilterModelForCompanyListPage } from './filter-model-for-company-list';

@NgModule({
  declarations: [
    FilterModelForCompanyListPage,
  ],
  imports: [
    IonicPageModule.forChild(FilterModelForCompanyListPage),
  ],
})
export class FilterModelForCompanyListPageModule {}
