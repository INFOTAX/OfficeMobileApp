import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';
import { CompanyReportProvider } from '../../providers/company-report/company-report';
/**
 * Generated class for the AdminUserProfileCompanyReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-admin-user-profile-company-report',
  templateUrl: 'admin-user-profile-company-report.html',
})
export class AdminUserProfileCompanyReportPage {
  @ViewChild('barCanvas') barCanvas;
  @ViewChild('doughnutCanvas') doughnutCanvas;
  @ViewChild('lineCanvas') lineCanvas;
  CompanyReportProvider;
  userName;
  company;
  report;
  querydata:any;
  visitData: any;
  servicedata:any;
  softwaredata:any;
  dataBar:any;
  tv1:number;
  tv2:number;
  tv3:number;
  tv4:number;
  tv5:number;
  
  qr1:number;
  qr2:number;
  qr3:number;
  qr4:number;
  sr1:number;
  sr2:number;
  sr3:number;
  sr4:number;
  sw:number;
  
  optq:any;
  optsw:any;
  optsr:any;
   opt: any = {
    legend: { position: 'bottom'}
  };

  constructor(public navCtrl: NavController, public navParams: NavParams, public companyReport: CompanyReportProvider) {
  }

  ngOnInit() {
    this.companyReport.getCompanyReport().subscribe(response=>{
     
      this.report = response;
      this.tv1=this.report.totalVisits;
      this.tv2=this.report.totalClientVisits;
      this.tv3=this.report.totalFranchiseVisits;
      this.tv4=this.report.totalFirstVisits;
      this.tv5=this.report.totalSecondOrThirdVisits;
     this. qr1=this.report.totalBadQueryRating;
     this. qr2=this.report.totalGoodQueryRating;
     this. qr3=this.report.totalVeryGoodQueryRating;
     this. qr4=this.report.totalExcellentQueryRating;
     this. sr1=this.report.totalBadQueryRating;
     this. sr2=this.report.totalGoodQueryRating;
     this. sr3=this.report.totalVeryGoodQueryRating;
     this. sr4=this.report.totalExcellentQueryRating;
     this. sw=this.report.totalSoftwareInterested;
    
     this.getChartForTotalVisitorType(this.report);
    // this.getChartForQueryType(this.report);
    // this.getChartForServiceType(this.report);
     //this.getChartForSoftwareType(this.report);
      console.log(this.report);
      (error : any) => {
        alert('TimeOut')
      } 
      console.log(this.report);
    });
  }

/* fectching data for chart ends*/
getChartForTotalVisitorType(visitData){
  this.report=visitData;
  this.visitData = new Chart(this.barCanvas.nativeElement, {
 
    type: 'bar',
    data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [{
            label: '# of Votes',
            data: [this.tv1, this.tv2, this.tv3, this.tv4, this.tv5],
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


/*chart for visitdata end*/

ionViewDidLoad() {
  console.log('ionViewDidLoad AdminUserProfileCompanyReportPage');
}

}
