import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {Observable} from "rxjs";
import {Symptom} from "./models/Symptom";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }
  readonly APP_URL = 'http://localhost:8080';

  public getSymptomsByBodyPart(bodyPart:string) : Observable<any>{
    let params = new HttpParams().set("bodyPartName",bodyPart);
    return this.http.get(this.APP_URL + '/app/symptoms/bodypart', {params: params});
  }

  public getBodyPartIdByName(bodyPartName:string){
    let params = new HttpParams().set("bodyPart",bodyPartName);
    return this.http.get(this.APP_URL + '/app/bodyparts/partId', {params: params});
  }

  public generateIllnessListBySymptoms(symptoms:any){debugger;
    let params = new HttpParams().set("symptom_names",symptoms);
    return this.http.get(this.APP_URL + '/app/symptoms/getsymptoms', {params: params});
  }
}