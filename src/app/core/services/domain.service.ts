import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Domain } from '../models/domain';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class DomainService {
  endpoint = environment.db_url + 'api/domain';
  // endpoint = 'api/dau-so';
  headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient) { }

  // Add Domain
  AddDomain(data: Domain): Observable<any> {
    const API_URL = `${this.endpoint}/create`;
    return this.http.post(API_URL, data)
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Get all Domain
  GetAllDomains() {
    return this.http.get(`${this.endpoint}`);
  }

  // Get Domain by Id
  GetDomain(id): Observable<any> {
    const API_URL = `${this.endpoint}/read/${id}`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // Get Count Domain
  GetCountDomain(): Observable<any> {
    const API_URL = `${this.endpoint}/count-customers`;
    return this.http.get(API_URL, { headers: this.headers })
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // List Expired
  GetListExpired(): Observable<any> {
    const API_URL = `${this.endpoint}/list-expired`;
    return this.http.get(API_URL)
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // List by Status
  GetListbyStatus(data): Observable<any> {
    const API_URL = `${this.endpoint}/list-by-status`;
    return this.http.post(API_URL, data)
      .pipe(
        map((res: Response) => {
          return res || {};
        }),
        catchError(this.errorMgmt)
      );
  }

  // Push Extend Domain
  pushExtendDomain(id, data): Observable<any> {
    const API_URL = `${this.endpoint}/pushextenddomain/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Pull Extend Domain
  pullExtendDomain(id, data): Observable<any> {
    const API_URL = `${this.endpoint}/pullextenddomain/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Update Status Domain
  updateStatusDomain(id, data): Observable<any> {
    const API_URL = `${this.endpoint}/updatestatus/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Update Domain
  UpdateDomain(id, data): Observable<any> {
    const API_URL = `${this.endpoint}/update/${id}`;
    return this.http.put(API_URL, data, { headers: this.headers })
      .pipe(
        catchError(this.errorMgmt)
      );
  }

  // Delete Domain
  DeleteDomain(id): Observable<any> {
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
