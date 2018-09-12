import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }


  public userwise(){
        this.router.navigate(['admin/userwise-report-dashboard'])
}

public consolidated(){
  this.router.navigate(['admin/Company-report'])
}



}