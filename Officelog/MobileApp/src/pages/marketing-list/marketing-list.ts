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
  selectedDate: string = new Date().toISOString();
  maxDate=new Date().toJSON().split('T')[0];
  
  today = new Date().toJSON().split('T')[0];

  filteredFromDate: string;
  filteredToDate: string;
  filteredServiceInterested: string;
  filteredSoftwareInterested: string;
  filterApplied=false;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    public marketingProvider: MarketingProvider,
    public alertCtrl: AlertController,
    public modelController: ModalController) {
  }
  ngOnInit() {
    this.toDate = new Date().toISOString();

    this.fromDate = new Date().toISOString();
    this.searchByDate(this.fromDate,this.toDate);

  }
  ionViewDidLoad() {

  }

  searchByDate(fromDate:String,toDate:String) {
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
              this.searchByDate(this.fromDate,this.toDate);
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
      this.searchByDate(this.fromDate,this.toDate);
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

        this.searchByDate(filterState.fromDate,filterState.toDate);


        if (filterState.softwareInterested && !filterState.serviceInterested) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested === filterState.softwareInterested;
          });
        }
        else if (filterState.serviceInterested && !filterState.softwareInterested) {
          this.marketing = allData.filter((data) => {
            return data.serviceInterested === filterState.serviceInterested;
          });
        }
        else if (filterState.softwareInterested && filterState.serviceInterested) {
          this.marketing = allData.filter((data) => {
            return data.softwareInterested === filterState.softwareInterested && data.serviceInterested===filterState.serviceInterested;
          });
        }
    //     else if(filterState.fromDate && filterState.toDate){
    //       this.fromDate=filterState.fromDate,
    //       this.toDate=filterState.toDate
    //       this.searchByDate(filterState.fromDate,filterState.toDate);
    //  }
        else {
          if(filterState.softwareInterested===false && filterState.serviceInterested===false){
            return this.marketing=allData;
          }
          else if(filterState.softwareInterested===null && filterState.serviceInterested===null){
            return this.marketing=allData;
          }
          else{
            return this.marketing = null;
          }
        }
        this.filterApplied=filterState.filterApplied;
        this.filteredSoftwareInterested=filterState.softwareInterested;
        this.filteredServiceInterested=filterState.serviceInterested;
        this.filteredFromDate=filterState.fromDate;
        this.filteredToDate=filterState.toDate;
      })
    });
    openFilterModel.present();
  }


}
