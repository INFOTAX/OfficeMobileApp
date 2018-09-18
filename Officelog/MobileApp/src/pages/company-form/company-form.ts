import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CompanyProvider, ICompany } from '../../providers/company/company';
import { CompanyListPage } from '../company-list/company-list';

/**
 * Generated class for the CompanyFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-company-form',
  templateUrl: 'company-form.html',
})
export class CompanyFormPage implements OnInit{

  
  companyForm : FormGroup;
  company : ICompany;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb : FormBuilder,private companyProviders : CompanyProvider) {
  }

  ngOnInit() {
    this.companyForm = this.fb.group({
      name : [],
      contactNumber : [],
      queryHandling : [],
      serviceProvided : [],
      visitorType : [],
      date : []
      



    })
   
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyFormPage');
  }

  saveCompanyForm(){
    if(this.companyForm.valid){
      let companyToSave = Object.assign({},this.company,this.companyForm.value);
      this.companyProviders.createCompany(companyToSave).subscribe(()=> this.navCtrl.push(CompanyListPage));
    }
  }

}
