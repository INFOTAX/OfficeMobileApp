import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, filter, tap, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import { tokenNotExpired } from 'angular2-jwt';
import { AlertController } from 'ionic-angular';

/*
  Generated class for the AuthProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AuthProvider {
  private baseUrl = 'http://localhost:14339/api/Auth';
    private token: ITokenResponse;
    profile: IUserProfile;
    userName:string;

  constructor(public http: HttpClient, private alertCtrl: AlertController) {
    //console.log('Hello AuthProvider Provider');
  }
  isAuthenticated(): boolean {

    return tokenNotExpired('token');

    }
    public getToken(loginModel : ILogin): Observable<ITokenResponse> {

      const url = `${this.baseUrl}/token`;

      return this.http.post<ITokenResponse>(url,loginModel).pipe(
          tap((data) => {
              this.token = data;
              console.log("token", this.token);
              localStorage.setItem("token", this.token.access_token);
              localStorage.setItem('profile', JSON.stringify(this.token.userProfile));
              localStorage.setItem('role',JSON.stringify(this.token.userProfile.role));
              
                    },
          
          err => {
                  if (err.status === 400){
                    
                      let alert = this.alertCtrl.create({
                        title: 'Login failed',
                        message: 'Please check your credentials',
                        buttons: ['OK']
                        
                      });
                      alert.present();
                    
                  }
                  //alert("Invalid Login Credentials");
                 }

          
      ));
  } 
  
  
  
  public getUserProfile(): IUserProfile {

      return this.profile = JSON.parse(localStorage.getItem('profile'));

  }
  

  public getRole():IUserProfile {
      return this.profile = JSON.parse(localStorage.getItem('role')); 
  }

  private readUserFromLocalStorage() {

      this.profile = JSON.parse(localStorage.getItem('profile'));
  }


  logout() {
    this.profile = null;
    localStorage.removeItem('profile');
  }

 
  isAdmin() {
    this.userName=this.token.userProfile.name;
    return this.token.userProfile.role==="Admin";
   
  }
  

}

export interface ITokenResponse {
  access_token: string;
  refresh_token: string;
  userProfile: IUserProfile;
}

export interface IUserProfile {
  sub: string;
  name: string;
  email: string;
  role : string;

}

export interface ILogin{
userName: string;
password: string;


}
 