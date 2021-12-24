import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Disease } from './disease';
import { DISEASES } from './list-diseases';
import {MessageService} from "./message.service";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {
  private diseaseUrl='api/diseases';
  httpOptions={
    headers : new HttpHeaders(({'Content-Type':'application/json'}))
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
  /** GET diseases from the server */

  getDiseases(): Observable<Disease[]> {
    return this.http.get<Disease[]>(this.diseaseUrl)
      .pipe(
        tap(_ => this.log('fetched diseases')),
        catchError(this.handleError<Disease[]>('getDiseases', []))
      );
  }
  getDiseaseNo404<Data>(id: number): Observable<Disease> {
    const url = `${this.diseaseUrl}/?id=${id}`;
    return this.http.get<Disease[]>(url)
      .pipe(
        map(disease => disease[0]), // returns a {0|1} element array
        tap(h => {
          const outcome = h ? `fetched` : `did not find`;
          this.log(`${outcome} disease id=${id}`);
        }),
        catchError(this.handleError<Disease>(`getDisease id=${id}`))
      );
  }
  /** GET disease by id. Will 404 if id not found */
  getDisease(id: number): Observable<Disease> {
    const url = `${this.diseaseUrl}/${id}`;
    return this.http.get<Disease>(url).pipe(
      tap(_ => this.log(`fetched disease id=${id}`)),
      catchError(this.handleError<Disease>(`getDisease id=${id}`))
    );
  }
  /* GET diseases whose name contains search term */
  searchDiseases(term: string): Observable<Disease[]> {
    if (!term.trim()) {
      // if not search term, return empty disease array.
      return of([]);
    }
    return this.http.get<Disease[]>(`${this.diseaseUrl}/?name=${term}`).pipe(
      tap(x => x.length ?
        this.log(`found diseases matching "${term}"`) :
        this.log(`no diseases matching "${term}"`)),
      catchError(this.handleError<Disease[]>('searchDiseases', []))
    );
  }
  /** POST: add a new disease to the server */
  addDisease(disease: Disease): Observable<Disease> {
    return this.http.post<Disease>(this.diseaseUrl, disease, this.httpOptions).pipe(
      tap((newDisease: Disease) => this.log(`added disease w/ id=${newDisease.id}`)),
      catchError(this.handleError<Disease>('addDisease'))
    );
  }
  /** DELETE: delete the disease from the server */
  deleteDisease(id: number): Observable<Disease> {
    const url = `${this.diseaseUrl}/${id}`;

    return this.http.delete<Disease>(url, this.httpOptions).pipe(
      tap(_ => this.log(`deleted disease id=${id}`)),
      catchError(this.handleError<Disease>('deleteDisease'))
    );
  }
  /** PUT: update the disease on the server */
  updateDisease(disease: Disease): Observable<any> {
    return this.http.put(this.diseaseUrl, disease, this.httpOptions).pipe(
      tap(_ => this.log(`updated disease id=${disease.id}`)),
      catchError(this.handleError<any>('updateDisease'))
    );
  }
  /**
   * Handle Http operation that failed.
   * Let the app continue.
   * @param operation - name of the operation that failed
   * @param result - optional value to return as the observable result
   */

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  /** Log a DiseaseService message with the MessageService */
  private log(message: string) {
    this.messageService.add(`DiseaseService: ${message}`);
  }
}
