import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  readonly APP_URL = 'http://localhost:8080/app/symptoms/bodypart';

  public getSymptomsByBodyPart(bodyPart:string) : Observable<any>{
    let params = new HttpParams().set("bodyPartName",bodyPart);
    return this.http.get(this.APP_URL, {params: params});
  }
}
