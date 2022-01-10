import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { DataService } from '../data.service';
import {MatDialogRef} from "@angular/material/dialog";

@Component({
  selector: 'app-add-symptom-dialog',
  templateUrl: './add-symptom-dialog.component.html',
  styleUrls: ['./add-symptom-dialog.component.css']
})
export class AddSymptomDialogComponent implements OnInit {
  bodyPartsList = [];

  constructor( public dialogRef: MatDialogRef<AddSymptomDialogComponent>,
    private dataService:DataService,
    private formBuilder: FormBuilder) { }

  addSymptom!: FormGroup;

  ngOnInit() {
      this.addSymptom = this.formBuilder.group({
        symptomName: ['', Validators.required],
        bodyParts: ['', Validators.required]
      });


    this.dataService.getAllBodyParts().subscribe((res: any) => {
      this.bodyPartsList = res;
    }, error => {
      console.log({ error });
    })
  }

  bodyParts = new FormControl();


  saveSymptom() {
      this.dataService.saveSymptom(this.addSymptom.value.symptomName, this.addSymptom.value.bodyParts.id)
        .subscribe((data) => {
          console.log(data.toString());
        });
  }
}
