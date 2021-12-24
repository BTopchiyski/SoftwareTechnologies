import { Component, OnInit } from '@angular/core';
import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [ './dashboard.component.css' ]
})
export class DashboardComponent implements OnInit {
  disease: Disease[] = [];

  constructor(private diseaseService: DiseaseService) { }

  ngOnInit(): void {
    this.getDiseases();
  }

  getDiseases(): void {
    this.diseaseService.getDiseases()
      .subscribe((disease: Disease[]) => this.disease = disease.slice(1, 5));
  }
}
