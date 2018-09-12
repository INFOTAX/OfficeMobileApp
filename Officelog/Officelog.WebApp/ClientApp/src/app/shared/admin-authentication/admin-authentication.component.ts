import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-admin-authentication',
  templateUrl: './admin-authentication.component.html',
  styleUrls: ['./admin-authentication.component.css']
})
export class AdminAuthenticationComponent implements OnInit {

  constructor(private _router: Router) { }

  ngOnInit() {
  }
  logOut(){
     localStorage.removeItem('token');
        localStorage.removeItem('profile');
        localStorage.removeItem('role');
        this._router.navigate(['login']);
            }
  

}
