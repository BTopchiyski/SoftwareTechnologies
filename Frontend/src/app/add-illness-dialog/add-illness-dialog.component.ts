import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import { Symptom } from '../models/Symptom';

@Component({
  selector: 'app-add-illness-dialog',
  templateUrl: './add-illness-dialog.component.html',
  styleUrls: ['./add-illness-dialog.component.css']
})
export class AddIllnessDialogComponent implements OnInit {
  symptomsList = [];
  constructor(private dataService:DataService, private formBuilder: FormBuilder) { }
  addIllness!: FormGroup;

  ngOnInit(): void {
    this.addIllness = this.formBuilder.group({
      illnessName: ['', Validators.required],
      illnessDescription: ['', Validators.required],
      symptoms: ['', Validators.required]
    });

    this.dataService.getAllSymptoms().subscribe((res: any) => {
      this.symptomsList = res;
    }, error => {
      console.log({ error });
    })
  }
  symptoms = new FormControl();

  saveIllness() {
    this.dataService.saveIllness(this.addIllness.value.illnessName, this.addIllness.value.illnessDescription, this.addIllness.value.symptoms)
      .subscribe((data) => {
        console.log(data.toString());
      });
  }
}
