
import { map, filter, tap, catchError } from 'rxjs/operators';
import { Response } from '@angular/http';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import {_throw} from 'rxjs/observable/throw';






export abstract class ServiceBase<T>{

  private entities: T[];
  constructor(protected _http: HttpClient, protected baseUrl: string) {
  }

  getAll(): Observable<T[]> {
    return this._http.get<T[]>(this.baseUrl);

  }

  getOne(id: number): Observable<T> {

    if(id == 0) {
      return Observable.of(this.intializeObject());
    }
    else{
    return this._http.get<T>(`${this.baseUrl}/${id}`);
    }
  }

  save(entity: T, id: number): Observable<T> {

    if (id == 0) {
      return this.create(entity);
    }
    return this.update(entity, id);
  }

  private create(entity : T):Observable<T>{
      return this._http.post<T>(this.baseUrl,entity)
        .pipe(
            tap(data => console.log('created: ' + JSON.stringify(data))),
            
            catchError(this.handleError)
        );
  }



  private update(entity: T, id: number): Observable<T> {
    const url = `${this.baseUrl}/${id}`;

    return this._http.put<T>(url, entity)
      .pipe(
        tap(data => console.log('updated: ' + JSON.stringify(data))),
        catchError(this.handleError)
      );
  }

  delete(id: number): Observable<any> {
 
    const url = `${this.baseUrl}/${id}`;

    return this._http.delete<T>(url)
    .pipe(
    tap(data => {
      console.log('deleted' + JSON.stringify(data));
  }),
    catchError(this.handleError)
    );
  }


  abstract intializeObject(): T;


  private handleError(error: HttpErrorResponse) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return _throw(
      'Something bad happened; please try again later.');
  };
} 
