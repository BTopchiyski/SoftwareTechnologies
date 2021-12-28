import { Component, OnInit, ViewChild } from '@angular/core';

import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';
import { MatTableDataSourcePaginator } from "@angular/material/table";

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

  onChangePage(diseases: Array<any>) {
    // update current page of items
    this.diseases = diseases;
  }
}
