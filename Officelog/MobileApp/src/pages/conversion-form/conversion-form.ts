import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FormBuilder, FormArray, FormGroup } from '@angular/forms';
import { MarketingProvider, IMarketinglog } from '../../providers/marketing/marketing';
import { ConversionListPage } from '../conversion-list/conversion-list';

export interface ServiceItems {
  serviceType: string;
  rate: number;
}

/**
 * Generated class for the ConversionFormPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conversion-form',
  templateUrl: 'conversion-form.html',
})
export class ConversionFormPage {

  public conversionForm: FormGroup;
  id: number;
  ServiceItems;
  marketing: IMarketinglog;

  constructor(public navCtrl: NavController, 
              public navParams: NavParams,
              private fb: FormBuilder,
              private marketingProviders: MarketingProvider) {
  }

  ngOnInit(){
    
    this.id=this.navParams.get('id');
    this.getConversionLog(this.id);

    this.conversionForm = this.newForm();
    //this.ServiceItems=[];
  
  }

  newForm():FormGroup{
    return this.fb.group({
      id: 0,
      name: [],
      contactNumber:[''],
      fee:[],
      serviceItems : this.fb.array([])
    })
  }

  get serviceTypeItems(): FormArray {
    return <FormArray>this.conversionForm.get('serviceItems');
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

  private getConversionLog(id):void{
    this.marketingProviders.getOne(id)
    .subscribe((marketingLog:IMarketinglog)=> this.onMarketingLogRetrieved(marketingLog)
    );
  }
  private onMarketingLogRetrieved(marketingLog : IMarketinglog) :void{
    this.marketing = marketingLog;

    
      this.conversionForm.patchValue({

      id: this.marketing.id,
      name: this.marketing.name,
      contactNumber: this.marketing.contactNumber,
      fee: this.marketing.fee,
       
      });
      for (let i = 0; i < this.marketing.serviceItems.length; i++) {
        this.serviceTypeItems.push(this.buildServiceType(this.marketing.serviceItems[i]));
      }
      
  }

  saveConversionForm():void {

    if (this.conversionForm.valid) {
  
        let p = Object.assign({}, this.marketing, this.conversionForm.value);
  
         this.marketingProviders.save(p, this.id)
            .subscribe(si=>{});
          this.onSaveComplete()
          
    }
  
  
    else if (!this.conversionForm.dirty) {
        this.onSaveComplete();
    }
  }
   onSaveComplete(){
    this.navCtrl.push(ConversionListPage);
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad ConversionFormPage');
  }

}
