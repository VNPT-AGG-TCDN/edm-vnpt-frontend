import { Injectable } from '@angular/core';
import { Unit } from '../models/unit';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class UnitService {

  endpoint = environment.db_url + 'api/units';
  // endpoint = 'api/units';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  // Add Unit
  AddUnit(data: Unit): Observable<any> {
    const API_URL = `${this.endpoint}/create`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all units
  GetUnits() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get all units
  GetUnitsActivated() {
    return this.http.get(`${this.endpoint}/activatedunit`);
  }

  // Get unit by Id
  GetUnit(id): Observable<any> {
    const API_URL = `${this.endpoint}/read/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // Get unit by UnitCode
  GetUnitbyUnitCode(data): Observable<any> {
    // console.log(data);

    const API_URL = `${this.endpoint}/getUnitbyUnitCode`;
    return this.http.post(API_URL, data, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // Update unit
  UpdateUnit(id, data): Observable<any> {
    const API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Delete unit
  DeleteUnit(id): Observable<any> {
    const API_URL = `${this.endpoint}/delete/${id}`;
    return this.http.delete(API_URL)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Error handling
  errorMgmt(error: HttpErrorResponse) {
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }

}
