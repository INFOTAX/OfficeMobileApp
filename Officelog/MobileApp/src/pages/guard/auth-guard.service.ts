import { Injectable } from '@angular/core';
/*import { CanActivate, Router, ActivatedRouteSnapshot } from '@angular/router';

import decode from 'jwt-decode';
import { AuthProvider } from '../../providers/auth/auth';

@Injectable({
  providedIn:'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private authprovider : AuthProvider,private router : Router) { }

  canActivate(route : ActivatedRouteSnapshot):boolean{

 

  

    
    const userRole = this.authprovider.getRole();
    console.log(userRole);
        const permission = route.data["permission"];
        console.log(permission);
        let canActivate: boolean;

        if (!permission) throw new Error('Permissions is not setup!');
        if (!permission.only.length) throw new Error('Roles are not setup!');

        canActivate = permission.only.includes(userRole);
        console.log(canActivate);

        if (!canActivate) this.router.navigate([permission.redirectTo]);

        return canActivate;
}
}
*/