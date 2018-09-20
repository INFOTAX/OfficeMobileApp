import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
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

  id:number;
  public companyForm : FormGroup;
  company : ICompany;
  softwareYes : boolean=false;
  softwareNo : boolean=false;
  ifOther : boolean= false;
  pageTitle;

  constructor(public navCtrl: NavController, public navParams: NavParams,private fb : FormBuilder,
              private companyProviders : CompanyProvider) {
  }

  ngOnInit() {
    this.companyForm = this.newForm();
   
  }
  newForm() : FormGroup{
    return this.fb.group({
      id: 0,
      name: ['', [Validators.required, Validators.minLength(2)]],
      contactNumber:['', [Validators.required, Validators.maxLength(10), Validators.minLength(10)]],
      softwareInterested: ['',Validators.required],
      queryHandling: ['',Validators.required],
      serviceProvided: ['',Validators.required],
      visitorType: ['',Validators.required],
      rateUs: [''],
      suggestionForYes: [''],
      suggestionForNo: [''],
      date:new Date(),
      rateUsForNo: ['']
      



    })
   
  }
  public getCompany(id: number) {
    this.companyProviders.getOne(id).subscribe(
      (company: ICompany) => this.onCompanyLogRetrieved(
        company));

  }
  private onCompanyLogRetrieved(company: ICompany): void {

    this.company = company;

    if (this.company.id == 0) {
      this.companyForm = this.newForm();
      this.pageTitle = 'Add in Companylog';
      console.log("add");
    }

    else {
      this.pageTitle = `Edit  in Company : ${this.company.name}`;
      //  let opDate = new Date(this.customer.customerOpeningDate);
      // Update the data on the form
      this.companyForm.patchValue({
        id:this.company.id,
        name:this.company.name,
        contactNumber:this.company.contactNumber,
        queryHandling:this.company.queryHandling,
        serviceProvided:this.company.serviceProvided,
        visitorType:this.company.visitorType,
        softwareInterested:this.softwareConvert(),
        rateUs:this.company.rateUs,
        rateUsForNo:this.rateUsConverter(),
        suggestionForYes:this.company.suggestionForYes,
        suggestionForNo:this.company.suggestionForNo,
        date:this.company.date

      })
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyFormPage');
  }

  saveCompanyForm(): void {
    if(this.companyForm.valid){
      let companyToSave = Object.assign({},this.company,this.companyForm.value);
      this.companyProviders.createCompany(companyToSave).subscribe(()=> this.navCtrl.push(CompanyListPage));
   this.onSaveComplete();
    }
    else if (!this.companyForm.dirty) {
      this.onSaveComplete();
    }
  }
  private onSaveComplete():void{
   // const displayMsg = this.id == 0 ? 'Saved' : 'Updated';
    this.navCtrl.push(CompanyListPage);
  }
/*software intrested filed added start*/
  softwareInterestedYes(){
    this.softwareYes=true;
    this.softwareNo=false;
    this.ifOther=false;
  }
  softwareInterestedNo(){
    this.softwareYes=false;
    this.softwareNo=true;
  }
  otherReason() {
    this.ifOther = true;
  }
  closeOtherReason() {
    this.ifOther = false;
  }
/*software intrested filed added end*/
companylist(){
  this.navCtrl.push(CompanyListPage);
}
softwareConvert(){

  if(this.company.softwareInterested=="Yes"){
    console.log(this.company.softwareInterested);
    this.softwareInterestedYes();
    return "Yes";
  }
  else{
    console.log(this.company.softwareInterested)
    this.softwareInterestedNo();
    return "No";
  }

}
rateUsConverter(){
  if(this.company.softwareInterested=="No"){
  if(this.company.rateUsForNo=="others"){
    this.otherReason();
    return "others";
  }
  else if(this.company.rateUsForNo=="alreadyHave"){
   return "alreadyHave";
  }
  else{
    return "notFriendly";
  }
}
else{
  return "";
}
}

}
