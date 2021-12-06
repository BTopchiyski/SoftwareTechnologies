import { Component, OnInit, Input } from '@angular/core';
import {Disease} from '../disease'
@Component({
  selector: 'app-disease-details',
  templateUrl: './disease-details.component.html',
  styleUrls: ['./disease-details.component.css']
})
export class DiseaseDetailsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() disease?: Disease;

}
