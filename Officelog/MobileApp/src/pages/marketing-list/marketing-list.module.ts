import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketingListPage } from './marketing-list';

@NgModule({
  declarations: [
    MarketingListPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketingListPage),
  ],
})
export class MarketingListPageModule {}
