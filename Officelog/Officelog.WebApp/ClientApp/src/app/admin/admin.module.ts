import { Routes, RouterModule } from '@angular/router';
import { AdminUserwiseReportDashboardComponent } from './Components/admin-userwise-report-dashboard/admin-userwise-report-dashboard.component';
import { AdminUserProfileCompanyReportingComponent } from './Components/admin-user-profile-company-reporting/admin-user-profile-company-reporting.component';
import { AdminUserProfileMarketingReportingComponent } from './Components/admin-user-profile-marketing-reporting/admin-user-profile-marketing-reporting.component';
import { AdminConsolidatedMarketingReportingComponent } from './Components/admin-consolidated-marketing-reporting/admin-consolidated-marketing-reporting.component';
import { AdminConsolidatedCompanyReportingComponent } from './Components/admin-consolidated-company-reporting/admin-consolidated-company-reporting.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { AuthenticatedUserComponent } from '../shared/authenticated-user/authenticated-user.component';
import { AdminAuthenticationComponent } from '../shared/admin-authentication/admin-authentication.component';
import { AuthGuardService } from '../guard/auth-guard.service';
import { AdminDashboardComponent } from './Components/admin-dashboard/admin-dashboard.component';
import { AdminConsolidatedSidebarComponent } from './Components/admin-consolidated-sidebar/admin-consolidated-sidebar.component';
import { AdminNavBarComponent } from './Components/admin-nav-bar/admin-nav-bar.component';




const appRoutes: Routes = [
  {path: 'admin',
    component : AdminAuthenticationComponent,
    canActivate: [AuthGuardService],
    data : {
      permission: {
        only: ["Admin"],
        redirectTo: 'login'
    }
    },
   
  children :[
    { path: 'userwise-report-dashboard', component: AdminUserwiseReportDashboardComponent},
    { path: 'user_profile_company_reporting/:userName', component: AdminUserProfileCompanyReportingComponent},
    { path: 'user_profile_marketing_reporting/:userName', component: AdminUserProfileMarketingReportingComponent},
    { path: 'Marketing-report', component: AdminConsolidatedMarketingReportingComponent},
    { path: 'Company-report', component: AdminConsolidatedCompanyReportingComponent},
    { path: 'dashboard', component: AdminDashboardComponent},
     
  ]}
  
];


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    RouterModule.forRoot(appRoutes),
  ],

  exports: [
    // AdminNavBarComponent
      ],

  declarations: [
    AdminUserProfileMarketingReportingComponent,
    AdminUserProfileCompanyReportingComponent,
    AdminUserwiseReportDashboardComponent,
    AdminConsolidatedMarketingReportingComponent,
    AdminConsolidatedCompanyReportingComponent,
    AdminDashboardComponent,
    AdminConsolidatedSidebarComponent,
    // AdminNavBarComponent

  ]
})


export class AdminModule { 

}
