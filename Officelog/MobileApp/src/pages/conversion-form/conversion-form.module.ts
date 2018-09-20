import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConversionFormPage } from './conversion-form';

@NgModule({
  declarations: [
    ConversionFormPage,
  ],
  imports: [
    IonicPageModule.forChild(ConversionFormPage),
  ],
})
export class ConversionFormPageModule {}
