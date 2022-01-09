import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-add-symptom-dialog',
  templateUrl: './add-symptom-dialog.component.html',
  styleUrls: ['./add-symptom-dialog.component.css']
})
export class AddSymptomDialogComponent implements OnInit {
  bodyPartsList = [];
  constructor(private dataService:DataService) { }

  ngOnInit(): void {
    this.dataService.getAllBodyParts().subscribe((res: any) => {
      this.bodyPartsList = res;
    }, error => {
      console.log({ error });
    })
  }

  bodyParts = new FormControl();

  
}
