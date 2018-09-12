import { NgModule } from '@angular/core';
import { PrimeNgModule } from './prime-ng/prime-ng.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AuthenticatedUserComponent } from './authenticated-user/authenticated-user.component';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { AdminAuthenticationComponent } from './admin-authentication/admin-authentication.component';
import { AdminModule } from '../admin/admin.module';
import { AdminNavBarComponent } from '../admin/Components/admin-nav-bar/admin-nav-bar.component';
import { SidebarComponent } from './sidebar/sidebar.component';



@NgModule({
    imports: [
        PrimeNgModule,
        FormsModule,
        ReactiveFormsModule,
                
    ],
    exports: [
        PrimeNgModule,
        FormsModule,
        AdminAuthenticationComponent,
        ReactiveFormsModule,
        AdminNavBarComponent,

    ],
    declarations: [AuthenticatedUserComponent,NavigationBarComponent, AdminAuthenticationComponent, AdminNavBarComponent, SidebarComponent],
    providers: [],
})
export class SharedModule { }
