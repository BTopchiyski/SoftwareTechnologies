import { Injectable } from '@angular/core';
import { Disease } from './disease';
import { DISEASES } from './list-diseases';

@Injectable({
  providedIn: 'root'
})
export class DiseaseService {

  constructor() { }

  getDisease(): Disease[] {
    return DISEASES;
  }
}
