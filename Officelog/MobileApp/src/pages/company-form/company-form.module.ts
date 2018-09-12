import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyFormPage } from './company-form';

@NgModule({
  declarations: [
    CompanyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyFormPage),
  ],
})
export class CompanyFormPageModule {}
