import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormBuilder, FormArray } from '@angular/forms';
import { IMarketinglog } from '../../providers/marketing/marketing';
import { MarketingListPage } from '../marketing-list/marketing-list';

export interface ServiceItems {
  serviceType: string;
  rate: number;
}

/**
 * Generated class for the MarketingLogFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketing-log-form',
  templateUrl: 'marketing-log-form.html',
})
export class MarketingLogFormPage implements OnInit{

  public marketingForm: FormGroup;
  marketingLog: IMarketinglog;
  serviceYes=false;
  serviceNo=false;
  softwareYes=false;
  softwareNo=false;
  ifOther = false;
  id: number;
  ServiceItems;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private fb: FormBuilder) {
  }

  ngOnInit(){
    this.marketingForm = this.newForm();
    this.ServiceItems=[];
  }
  newForm():FormGroup{
    return this.fb.group({
      id: 0,
      name: [],
      contactNumber:[''],
      softwareInterested: [''],
      rateUs: [''],
      fee:[],
      serviceInterested: [''],
      rateUsForNo: [''],
      currentScenario: [''],
      suggestionForNo: [''],
      suggestionForYes: [''],
      area: [''],
      date:[],
      serviceItems : this.fb.array([])
    })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MarketingLogFormPage');
  }

  serviceInterestedYes(){
    this.serviceYes=true;
    this.serviceNo=false;

  }
  serviceInterestedNo(){
    this.serviceYes=false;
    this.serviceNo=true;
  }
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
  get serviceTypeItems(): FormArray {
    return <FormArray>this.marketingForm.get('serviceItems');
  }
  deleteServiceType(index: number) {
    this.serviceTypeItems.removeAt(index);
  }
  addNewServiceType(type : HTMLInputElement,rate : HTMLInputElement){
    var serviceItem : ServiceItems = {
      serviceType : String(type.value),
      rate : Number(rate.value)
    }
    this.addServiceLine(serviceItem)
  }
  addServiceLine(serviceItem : ServiceItems):void{
    this.serviceTypeItems.push(this.buildServiceType(serviceItem));
  }
  private buildServiceType(serviceItem: ServiceItems): FormGroup {
    return this.fb.group({
        serviceType: [serviceItem.serviceType],
        rate : [serviceItem.rate]
      
    })
  }

  saveMarketingForm():void {

    // if (this.marketingForm.valid) {
  
    //     let p = Object.assign({}, this.marketingLog, this.marketingForm.value);
  
    //      this.marketingLogService.save(p, this.id)
    //         .subscribe(si=>{});
    //       this.onSaveComplete()
          
    // }
  
  
    // else if (!this.marketingForm.dirty) {
    //     this.onSaveComplete();
    // }
  }
   onSaveComplete(){
    this.navCtrl.push(MarketingListPage);
  }

}
