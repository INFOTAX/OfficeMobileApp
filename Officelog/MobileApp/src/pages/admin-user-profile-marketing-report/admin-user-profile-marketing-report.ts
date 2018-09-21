import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MarketingReportProvider } from '../../providers/marketing-report/marketing-report';
import { Chart } from 'chart.js'
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
export class AdminUserProfileMarketingReportPage {

  @ViewChild('barCanvas') barCanvas;

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
      this.chartForTotalConversion(this.conversionReports);
      (error : any) => {
       alert('TimeOut')
     } 
   });
 
 }

 chartForMarketingReport(){
  this.sotwareAndServiceInterestedChart = new Chart(this.barCanvas.nativeElement, {
 
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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

//  chartForMarketingReport(marketingReportData){
//   this.marketingReports = marketingReportData;
//   this.marketingReportData = { 
//     labels: ['Total software interested','Total service interested'],
//     datasets: [
//         {
//            label: '',
//             data: [this.TotalSoftwareInterested,this.TotalServiceInterested],
//             backgroundColor: [
//               "#FF6384",
//               "#36A2EB"
//             ],
//             hoverBackgroundColor: [
//               "#FF6384",
//               "#36A2EB",
    
//             ],
//         }]    
//     }
//     this.options={
//       scales:{
//         yAxes:[{
//           ticks:{
//             beginAtZero:true
//           }
//         }]
//       },
    
//             legend: {
//               position:false
//             }}
  

// };

// chartForMarketingReport(marketingReportData)
//    {
//   this.sotwareAndServiceInterestedChart = new Chart(this.barCanvas.nativeElement, {
 
//     type: 'bar',
//     data: {
//         labels: ['Total software interested','Total service interested'],
//         datasets: [{
//             label: '# of Votes',
//             data: [this.TotalSoftwareInterested,this.TotalServiceInterested],
//             backgroundColor: [
//                 'rgba(255, 99, 132, 0.2)',
//                 'rgba(54, 162, 235, 0.2)'
//             ],
//             borderColor: [
//                 'rgba(255,99,132,1)',
//                 'rgba(54, 162, 235, 1)'
//             ],
//             borderWidth: 1
//         }]
//     },
//     options: {
//         scales: {
//             yAxes: [{
//                 ticks: {
//                     beginAtZero:true
//                 }
//             }]
//         }
//     }

// });
// }

chartForTotalConversion(conversionReportData){
  this.conversionReports = conversionReportData;
  this.conversionReportData = { 
    labels: ['Total Conversion',''],
    datasets: [
        {
           label: '',
            data: [this.TotalConversion],
            backgroundColor: [
              "#FF6384"
            ],
            hoverBackgroundColor: [
              "#FF6384"
            ],
        }]    
    }
    this.options={
      scales:{
        yAxes:[{
          ticks:{
            beginAtZero:true
          }
        }]
      },
    
            legend: {
                position: false,
            }}
  

};

  

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminUserProfileMarketingReportPage');
  }

}
