import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AdminConsolidatedReportingProvider } from '../../providers/admin-consolidated-reporting/admin-consolidated-reporting';
import { Chart } from 'chart.js';

/**
 * Generated class for the AdminConsolidatedCompanyReportingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation. 
 */

@IonicPage()
@Component({
  selector: 'page-admin-consolidated-company-reporting',
  templateUrl: 'admin-consolidated-company-reporting.html',
})
export class AdminConsolidatedCompanyReportingPage implements OnInit {

  @ViewChild('visitorType') visitorType;
  @ViewChild('queryRating') queryRating;
  @ViewChild('serviceRating') serviceRating;
  @ViewChild('softwareInterested') softwareInterested;

  visitorTypeChart;
  queryRatingChart;
  serviceRatingChart;
  softwareInterestedChart;

  TVisits = true;
  TQuery = true;
  TService = true;
  TSoftware = true;

  companyReportData;

  TotalVisits: number;
  TotalClientVisits: number;
  TotalFirstVisits: number;
  TotalFranchiseVisits: number;
  TotalSecondOrThirdVisits: number;

  TotalBadQueryRating: number;
  TotalGoodQueryRating: number;
  TotalVeryGoodQueryRating: number;
  TotalExcellentQueryRating: number;

  TotalBadServiceRating: number;
  TotalGoodServiceRating: number;
  TotalVeryGoodServiceRating: number;
  TotalExcellentServiceRating: number;

  TotalSoftwareInterested: number;

  constructor(public navCtrl: NavController, public navParams: NavParams,
    private consolidatedProvider: AdminConsolidatedReportingProvider) {
  }

  ngOnInit() {
    this.consolidatedProvider.getCompanyReport().subscribe(res => {
      this.companyReportData = res;
      this.TotalVisits = this.companyReportData.totalVisits;
      this.TotalClientVisits = this.companyReportData.totalClientVisits;
      this.TotalFirstVisits = this.companyReportData.totalFirstVisits;
      this.TotalFranchiseVisits = this.companyReportData.totalFranchiseVisits;
      this.TotalSecondOrThirdVisits = this.companyReportData.totalSecondOrThirdVisits;
      this.TotalBadQueryRating = this.companyReportData.totalBadQueryRating;
      this.TotalGoodQueryRating = this.companyReportData.totalGoodQueryRating;
      this.TotalVeryGoodQueryRating = this.companyReportData.totalVeryGoodQueryRating;
      this.TotalExcellentQueryRating = this.companyReportData.totalExcellentQueryRating;
      this.TotalBadServiceRating = this.companyReportData.totalBadServiceRating;
      this.TotalGoodServiceRating = this.companyReportData.totalGoodServiceRating;
      this.TotalVeryGoodServiceRating = this.companyReportData.totalVeryGoodServiceRating;
      this.TotalExcellentServiceRating = this.companyReportData.totalExcellentServiceRating;
      this.TotalSoftwareInterested = this.companyReportData.totalSoftwareInterested;
      this.chartForTotalVisitor();
      this.chartForQueryRating();
      this.chartForServiceRating();
      this.chartForSoftwareInterested();
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdminConsolidatedCompanyReportingPage');
  }
  chartForTotalVisitor() {
    this.visitorTypeChart = new Chart(this.visitorType.nativeElement, {

      type: 'bar',
      data: {
        labels: ['', '', '', '', ''],
        datasets: [{
          label: '',
          data: [this.TotalVisits, this.TotalClientVisits, this.TotalFirstVisits, this.TotalFranchiseVisits, this.TotalSecondOrThirdVisits],
          backgroundColor: [

            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgb(255, 255, 102, 0.2)',
            'rgb(0, 255, 0, 0.2)',
            'rgb(255, 26, 26, 0.2)'
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 255, 102, 1)',
            'rgb(0, 255, 0, 1)',
            'rgb(255, 26, 26, 1)'
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

  chartForQueryRating() {
    this.queryRatingChart = new Chart(this.queryRating.nativeElement, {

      type: 'bar',
      data: {
        labels: ['Bad', 'Good', 'Very Good', 'Excellent'],
        datasets: [{
          label: '',
          data: [this.TotalBadQueryRating, this.TotalGoodQueryRating, this.TotalVeryGoodQueryRating, this.TotalExcellentQueryRating],
          backgroundColor: [


            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgb(255, 255, 102, 0.2)',
            'rgb(0, 255, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 255, 102, 1)',
            'rgb(0, 255, 0, 1)',
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

  chartForServiceRating() {
    this.serviceRatingChart = new Chart(this.serviceRating.nativeElement, {

      type: 'bar',
      data: {
        labels: ['Bad', 'Good', 'Very Good', 'Excellent'],
        datasets: [{
          label: '',
          data: [this.TotalBadServiceRating, this.TotalGoodServiceRating, this.TotalVeryGoodServiceRating, this.TotalExcellentServiceRating],
          backgroundColor: [


            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgb(255, 255, 102, 0.2)',
            'rgb(0, 255, 0, 0.2)',
          ],
          borderColor: [
            'rgba(255,99,132,1)',
            'rgba(54, 162, 235, 1)',
            'rgb(255, 255, 102, 1)',
            'rgb(0, 255, 0, 1)',
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

  chartForSoftwareInterested() {
    this.softwareInterestedChart = new Chart(this.softwareInterested.nativeElement, {

      type: 'bar',
      data: {
        labels: ['', '',''],
        datasets: [{
          label: '',
          data: [this.TotalSoftwareInterested],
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
              beginAtZero: true
            }
          }]
        }
      }

    });
  }

  visits() {
    this.TVisits = false;
    this.TQuery = true;
    this.TService = true;
    this.TSoftware = true;
  }
  query() {
    this.TVisits = true;
    this.TQuery = false;
    this.TService = true;
    this.TSoftware = true;
  }
  service() {
    this.TVisits = true;
    this.TQuery = true;
    this.TService = false;
    this.TSoftware = true;
  }
  software() {

    this.TVisits = true;
    this.TQuery = true;
    this.TService = true;
    this.TSoftware = false;

  }


}
