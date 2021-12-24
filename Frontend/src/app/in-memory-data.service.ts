import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Disease } from './disease';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const diseases = [
      { id: 11, name: 'Sample disease 1' },
      { id: 12, name: 'Sample disease 2' },
      { id: 13, name: 'Sample disease 3' },
      { id: 14, name: 'Sample disease 4' },
      { id: 15, name: 'Sample disease 5' },
      { id: 16, name: 'Sample disease 6' },
      { id: 17, name: 'Sample disease 7' },
      { id: 18, name: 'Sample disease 8' },
      { id: 19, name: 'Sample disease 9' },
      { id: 20, name: 'Sample disease 10' }
    ];
    return {diseases};
  }

  // Overrides the genId method to ensure that a disease always has an id.
  // If the disease array is empty,
  // the method below returns the initial number (11).
  // if the disease array is not empty, the method below returns the highest
  // disease id + 1.
  genId(diseases: Disease[]): number {
    return diseases.length > 0 ? Math.max(...diseases.map(disease => disease.id)) + 1 : 11;
  }
}
