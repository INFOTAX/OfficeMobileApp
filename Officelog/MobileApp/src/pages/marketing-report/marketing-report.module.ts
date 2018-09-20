import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketingReportPage } from './marketing-report';

@NgModule({
  declarations: [
    MarketingReportPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketingReportPage),
  ],
})
export class MarketingReportPageModule {}
