import { Component, ViewChild, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketingReportProvider } from '../../providers/marketing-report/marketing-report';
import { Chart } from 'chart.js';
import { viewClassName } from '@angular/compiler';
/**
 * Generated class for the AdminUserProfileMarketingReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

 
@IonicPage() 
@Component({
  selector: 'page-admin-user-profile-marketing-report',
  templateUrl: 'admin-user-profile-marketing-report.html',
})
export class AdminUserProfileMarketingReportPage implements OnInit {

  @ViewChild('barCanvas') barCanvas;
  @ViewChild('conversionCanvas') conversionCanvas;

  marketingReports;
  conversionReports;
  marketingReportData;
  conversionReportData;
  TotalSoftwareInterested:number;
  TotalServiceInterested:number;
  AvgPriceOfSoftware:number;
  TotalConversion:number;
  options:any;

  sotwareAndServiceInterestedChart;
  conversionChart;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    public marketingReport: MarketingReportProvider) {
}

  ngOnInit() {
  

    this.marketingReport.getMarketingReports().subscribe(res=>{
      this.marketingReports=res;
      this.TotalSoftwareInterested=this.marketingReports.totalSoftwareInterested;
      this.TotalServiceInterested=this.marketingReports.totalServiceInterested;
      this.AvgPriceOfSoftware=this.marketingReports.averagePriceOfSoftware;
      this.chartForMarketingReport();
      console.log(this.marketingReports);
    });
 
   this.marketingReport.getConversionReports().subscribe(res=>{
      this.conversionReports=res;
      this.TotalConversion=this.conversionReports.totalConversions;
      this.chartForTotalConversion();
      (error : any) => {
       alert('TimeOut')
     } 
   });
 
 }

 chartForMarketingReport(){
  this.sotwareAndServiceInterestedChart = new Chart(this.barCanvas.nativeElement, {
 
    type: 'bar',
    data: {
        labels: ['Total software interested','Total service interested'],
        datasets: [{
            label: '',
            data: [this.TotalSoftwareInterested,this.TotalServiceInterested],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});
 }


chartForTotalConversion(){
  this.conversionChart = new Chart(this.conversionCanvas.nativeElement, {
 
    type: 'bar',
    data: {
        labels: ['Total conversion',''],
        datasets: [{
            label: '# of Votes',
            data: [this.TotalConversion],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }

});
}

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUserProfileMarketingReportPage');
  }

}
