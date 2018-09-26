import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { MarketingProvider, IMarketinglog } from '../../providers/marketing/marketing';
import { MarketingLogFormPage } from '../marketing-log-form/marketing-log-form';
import { AlertController } from 'ionic-angular';
import { FilterModelPage } from '../filter-model/filter-model';





@IonicPage()
@Component({
  selector: 'page-marketing-list',
  templateUrl: 'marketing-list.html',
})
export class MarketingListPage {


  marketing: IMarketinglog[];
  selectedMarketingLog: IMarketinglog;
  fromDate: string;
  toDate: string;
  id: number;
  //current: number = 0;
  current;
  maxDate = new Date().toJSON().split('T')[0];

  today = new Date().toJSON().split('T')[0];

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marketingProvider: MarketingProvider,
    public alertCtrl: AlertController,
    public modelController: ModalController) {
  }
  ngOnInit() {
    this.toDate = new Date().toISOString();

    this.fromDate = new Date().toISOString();


  }
  ionViewDidLoad() {

  }

  searchByDate() {
    this.marketingProvider.getMarketing(this.fromDate, this.toDate).subscribe(res => this.marketing = res);

  }
  marketingform() {
    this.id = 0;
    this.navCtrl.push(MarketingLogFormPage, { id: this.id });
  }



  deleteList(index) {
    const confirm = this.alertCtrl.create({
      title: 'Are you sure?',
      message: 'This will delete your data',
      buttons: [
        {
          text: 'Yes',
          handler: () => {
            this.selectedMarketingLog = index;
            this.marketingProvider.delete(this.selectedMarketingLog.id).subscribe(() => {
              this.searchByDate();
            });
          }
        },
        {
          text: 'No',
          handler: () => {

          }
        }
      ]
    });
    confirm.present();
  }

  patchConversion(index) {
    this.selectedMarketingLog = index;
    this.marketingProvider.conversion(this.selectedMarketingLog, this.selectedMarketingLog.id).subscribe(() => {
      this.searchByDate();
    })
  }


  edit(event) {
    //this.navParams.get('MarketingLogFormPage');
    this.id = event.id;
    console.log(this.id)
    this.navCtrl.push(MarketingLogFormPage, { id: this.id });
  }

  openFilterModel() {
    let openFilterModel = this.modelController.create(FilterModelPage);
    openFilterModel.onDidDismiss((filterState) => {
      this.marketingProvider.getMarketing(this.fromDate, this.toDate).subscribe((allData) => {
        this.marketing = allData;

        if (filterState.showNo &&(!filterState.serviceYes && !filterState.serviceNo )) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested !== "YES"
          });
        }
        else if (filterState.showYes &&(!filterState.serviceYes && !filterState.serviceNo )) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested !== "NO"
          });
        }
        else if (filterState.serviceYes &&(!filterState.showYes && !filterState.showNo )) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested !== "NO"
          });
        }
        else if (filterState.serviceNo &&(!filterState.showYes && !filterState.showNo )) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested !== "YES"
          });
        }
        else if (filterState.serviceNo && (filterState.showNo && !filterState.showYes))  {
          this.marketing = allData.filter((data) => {
            return (data.serviceInterested !== "YES" && data.softwareInterested !=="YES")
          });
        }
        else if (filterState.serviceYes && (filterState.showYes && !filterState.showNo)) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested !== "NO" && data.softwareInterested !=="NO"
          });
        }

        else if (filterState.showYes && (!filterState.serviceYes && !filterState.serviceNo)) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested !=="NO"
          });
        }
        else if (filterState.showNo && (!filterState.serviceYes && !filterState.serviceNo)) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested !=="Yes"
          });
        }
        else if (filterState.serviceYes && (!filterState.showYes && !filterState.showNo)) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested !== "NO"
          });
        }
        else if (filterState.serviceNo && (!filterState.showYes && !filterState.showNo)) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested !== "YES"
          });
        }

        else {
          this.marketing = allData;
          return;
        }

        // if(filterState.showYes && filterState.showNo){
        //   this.marketing=allData;
        //   return;
        // }
        // else if(!filterState.showYes && !filterState.showNo){
        //   this.marketing=[];
        //   return;
        // }
        // else if(!filterState.showYes && filterState.showNo){
        //   this.marketing=allData.filter((data)=>{
        //     return data.softwareInterested !=="YES"
        //   });
        //   }
        //   else{
        //     this.marketing=allData.filter((data)=>{
        //       return data.softwareInterested !=="NO"
        //     });
        //     }
      })
    });
    openFilterModel.present();
  }


}
