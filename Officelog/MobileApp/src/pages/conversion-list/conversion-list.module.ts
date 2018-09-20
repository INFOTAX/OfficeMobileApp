import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversionListPage } from './conversion-list';

@NgModule({
  declarations: [
    ConversionListPage,
  ],
  imports: [
    IonicPageModule.forChild(ConversionListPage),
  ],
})
export class ConversionListPageModule {}
