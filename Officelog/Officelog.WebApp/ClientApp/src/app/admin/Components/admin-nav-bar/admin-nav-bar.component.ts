import { Component, OnInit, ElementRef } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-nav-bar',
  templateUrl: './admin-nav-bar.component.html',
  host: {
    '(document:click)': 'handleClick($event)',
},

  styleUrls: ['./admin-nav-bar.component.css']
})
export class AdminNavBarComponent implements OnInit {
 
  items: MenuItem[];
  toggleMenu: boolean = false;

  constructor(private _router : Router, private elementRef:ElementRef, 
              ) { }

  ngOnInit() {
   
    // this.items = [ 
    //   {label: 'Home', icon: 'fa fa-fw fa-home' ,routerLink: ['/authenticated/dashboard_log']},
      

    //   {label: 'Company',
    //   items:[
    //     {label: 'Company Log', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/companydashboard_log']},
    //     {label: 'Company list', icon: 'fa fa-fw fa-book' ,routerLink: ['/authenticated/company_log_list']},
    //   ],
    //    icon: 'fa fa-fw fa-book',routerLink: ['/authenticated/companydashboard_log']},


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

  userLog(){

    this._router.navigate(['authenticated/user_log']);
    
  }

  logOut(){
    localStorage.removeItem('token');
    localStorage.removeItem('profile');
    localStorage.removeItem('role');
    this._router.navigate(['login']);


    
  
 };

 

}

  

 
 
  

