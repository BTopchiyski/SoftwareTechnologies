import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';
@Component({
  selector: 'app-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css']
})
export class DiseaseDetailsComponent implements OnInit {

  disease: Disease | undefined;

  constructor(
    private route: ActivatedRoute,
    private diseaseService: DiseaseService,
    private location: Location
  ) {
  }

  ngOnInit(): void {
    this.getDisease();
  }

  getDisease(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.diseaseService.getDisease(id)
      .subscribe(disease => this.disease = disease);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (this.disease) {
      this.diseaseService.updateDisease(this.disease)
        .subscribe(() => this.goBack());
    }
  }
}
