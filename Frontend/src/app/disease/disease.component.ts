import { Component, OnInit } from '@angular/core';
import {Disease} from '../disease';
import { DISEASES } from '../list-diseases';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css']
})
export class DiseaseComponent implements OnInit {

      disease: Disease[]=[];
      selectedDisease?:Disease;


  constructor(private diseaseService: DiseaseService) {

  }
  ngOnInit(): void {
    this.getDisease();
  }

  onSelect(disease: Disease): void {
      this.selectedDisease = disease;
    }

  getDisease(): void {
    this.disease = this.diseaseService.getDisease();
  }
}
