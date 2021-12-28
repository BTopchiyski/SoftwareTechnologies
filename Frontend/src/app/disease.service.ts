import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Disease } from './disease';
import { DISEASES } from './list-diseases';
import {MessageService} from "./message.service";

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor(private messageService: MessageService) { }

  getDiseases(): Observable<Disease[]> {
    const diseases = of(DISEASES);
    this.messageService.add('DiseaseService: fetched diseases');
    return diseases;
  }
  getDisease(id:Number): Observable<Disease>{
    const disease = DISEASES.find(h=>h.diseaseID===id)!;
    this.messageService.add('DiseaseService : fetched disease id=${id}');
    return of(disease);
  }
}
