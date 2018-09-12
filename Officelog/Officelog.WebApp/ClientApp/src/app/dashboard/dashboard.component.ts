import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private _router : Router) { }

  ngOnInit() {
  }
  
  companyDashboard(){

    this._router.navigate(['authenticated/company_log/:id']);
   
  }
  marketingDashboard(){

    this._router.navigate(['authenticated/marketing_log/:id']);
   
  }
}
