import { Component, OnInit } from '@angular/core';

import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

  diseases: Disease[] = [];

  constructor(private diseaseService: DiseaseService) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(): void {
    this.diseaseService.getDiseases()
      .subscribe((diseases: Disease[]) => this.diseases = diseases);
  }
  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.diseaseService.addDisease({ name } as Disease)
      .subscribe(disease => {
        this.diseases.push(disease);
      });
  }

  delete(disease: Disease): void {
    this.diseases = this.diseases.filter(h => h !== disease);
    this.diseaseService.deleteDisease(disease.id).subscribe();
  }

}
