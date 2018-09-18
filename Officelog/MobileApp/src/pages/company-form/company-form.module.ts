import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CompanyFormPage } from './company-form';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CompanyFormPage,
  ],
  imports: [
    IonicPageModule.forChild(CompanyFormPage),
    ReactiveFormsModule,
    FormsModule
  ],
})
export class CompanyFormPageModule {}
