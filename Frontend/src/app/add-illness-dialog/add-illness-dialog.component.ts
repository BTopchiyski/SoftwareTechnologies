import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';
import { Symptom } from '../models/Symptom';

@Component({
  selector: 'app-add-illness-dialog',
  templateUrl: './add-illness-dialog.component.html',
  styleUrls: ['./add-illness-dialog.component.css']
})
export class AddIllnessDialogComponent implements OnInit {
  symptomsList = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllSymptoms().subscribe((res: any) => {
      this.symptomsList = res;
    }, error => {
      console.log({ error });
    })
  }
  symptoms = new FormControl();

}
