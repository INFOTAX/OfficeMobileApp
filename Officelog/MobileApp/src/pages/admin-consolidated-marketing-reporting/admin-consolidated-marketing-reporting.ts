import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminConsolidatedReportingProvider } from '../../providers/admin-consolidated-reporting/admin-consolidated-reporting';
import { Chart } from 'chart.js';
/**
 * Generated class for the AdminConsolidatedMarketingReportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-consolidated-marketing-reporting',
  templateUrl: 'admin-consolidated-marketing-reporting.html',
})
export class AdminConsolidatedMarketingReportingPage implements OnInit {

  @ViewChild('marketingReport') marketingReport;
  @ViewChild('conversionReport') conversionReport;

  marketingReports;
  conversionReports;
  TotalSoftwareInterested:number;
  TotalServiceInterested:number;
  AvgPriceOfSoftware:number;
  TotalConversion:number;
  MarketingReportChart;
  ConversionChart;

  markReport=true;
  convReport=true;


  


  constructor(public navCtrl: NavController, public navParams: NavParams,
    private consolidatedProvider: AdminConsolidatedReportingProvider) {
  }

  ngOnInit(){
    this.consolidatedProvider.getMarketingReport().subscribe(res=>{
      this.marketingReports=res;
      this.TotalSoftwareInterested=this.marketingReports.totalSoftwareInterested;
      this.TotalServiceInterested=this.marketingReports.totalSoftwareInterested;
      this.AvgPriceOfSoftware=this.marketingReports.averagePriceOfSoftware;
      this.chartForMarketingReport();
      console.log(this.marketingReports);
    });
 
   this.consolidatedProvider.getConversionReport().subscribe(res=>{
      this.conversionReports=res;
      this.TotalConversion=this.conversionReports.totalConversions;
      this.chartForTotalConversion();
      (error : any) => {
       alert('TimeOut')
     } 
   });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminConsolidatedMarketingReportingPage');
  }

  chartForMarketingReport(){
    this.MarketingReportChart = new Chart(this.marketingReport.nativeElement, {

      type: 'bar',
      data: {
        labels: ['', '',''],
        datasets: [{
          label: '',
          data: [this.TotalSoftwareInterested,this.TotalServiceInterested,this.AvgPriceOfSoftware],
          backgroundColor: [

            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 255, 102, 1)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 255, 102, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  
  chartForTotalConversion(){
    this.ConversionChart = new Chart(this.conversionReport.nativeElement, {

      type: 'bar',
      data: {
        labels: ['Total Conversion', '',''],
        datasets: [{
          label: '',
          data: [this.TotalConversion],
          backgroundColor: [

            'rgba(255, 99, 132, 1)'
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
              beginAtZero: true
            }
          }]
        }
      }
    });
  }
  viewMarketingReport(){
    this.markReport=false;
    this.convReport=true;
  }
  viewConversionReport(){
    this.markReport=true;
    this.convReport=false;
    
  }

}
