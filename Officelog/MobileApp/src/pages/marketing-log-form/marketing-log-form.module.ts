import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MarketingLogFormPage } from './marketing-log-form';

@NgModule({
  declarations: [
    MarketingLogFormPage,
  ],
  imports: [
    IonicPageModule.forChild(MarketingLogFormPage),
  ],
})
export class MarketingLogFormPageModule {}
