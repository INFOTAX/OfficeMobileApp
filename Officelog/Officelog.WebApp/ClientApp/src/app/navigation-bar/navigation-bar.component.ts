import { Component, OnInit, ElementRef } from '@angular/core';
import {MenuItem} from 'primeng/api';
import {  Router } from '@angular/router';
import { IUserlog } from '../login-user-form/userlogin';
import { UserlogService } from '../services/userlog.service';
import { LoginService } from '../services/login.service';


@Component({
  selector: 'app-navigation-bar',
  templateUrl: './navigation-bar.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
},
  styleUrls: ['./navigation-bar.component.css']
})
export class NavigationBarComponent implements OnInit {
  items: MenuItem[];
  toggleMenu: boolean = false;
  userProfile  = this.loginService.getUserProfile();
  
  constructor(private _router : Router,private elementRef:ElementRef,private loginService : LoginService ) { }

  ngOnInit() {
    
   
   /* this.items = [ 
      {label: 'Home', icon: 'fa fa-fw fa-home' ,routerLink: ['/authenticated/dashboard_log']},
      

      {label: 'Company',
      items:[
        {label: 'Company Log', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/companydashboard_log']},
        {label: 'Company list', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/company_log_list']},
      ],
       icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/companydashboard_log']},


       {label: 'Market', 
      items:[
        {label: 'Marketing Log', icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/marketing-dashBoard']},
        {label: 'Marketing list', icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/marketing_log_list']},
      ],
      icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/marketing-dashBoard']
    },
    {label: 'Admin User ProfileReporting Dashboard', 
        icon: 'fa fa-fw fa-area-chart ',routerLink: ['/admin/admin-userwise-report-dashboard']
  },

     
           
      {label: 'Conversion list', icon:'fa fa-fw fa-book',routerLink: ['/authenticated/conversion_list']
    
    },

    {label: 'Consolidated-admin',
    items:[
      {label: 'Marketing-report', icon: 'fa fa-fw fa-book' ,routerLink: ['/admin/Marketing-report']},
      {label: 'Company-report', icon: 'fa fa-fw fa-book' ,routerLink: ['/admin/Company-report']},
    ],
     icon: 'fa fa-fw fa-book'},
  ]
      */

     

}
  // marketingLogList() {

  //   this._router.navigate(['marketing_log_list']);
  //   // this.compLog=true;
  //   // this.markLog=false;
  // }
  // companyLogList(){

  //   this._router.navigate(['company_log_list']);
  //   // this.compLog=true;
  //   // this.markLog=false;
  // }
  
  
  userLog(){

    this._router.navigate(['authenticated/user_log/detail']);
    
  }

  handleClick(event){
    if (!this.elementRef.nativeElement.contains(event.target)) {
        this.toggleLogin =false;
      this.toggleMenu=false;
    }
}
 
  toggleLogin:boolean=false;
  onToggleLogin():void{
    //for logged in user profile/login toggle
    this.toggleLogin = !this.toggleLogin;     
  }
 
  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    localStorage.removeItem('role');
    this._router.navigate(['login']);

 };

  }

