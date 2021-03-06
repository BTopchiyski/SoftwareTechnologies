import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';
import {Illness} from "../models/Illness";
import {Router} from "@angular/router";

@Component({
  selector: 'app-disease',
  templateUrl: './disease.component.html',
  styleUrls: ['./disease.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class DiseaseComponent implements OnInit {
  @ViewChild('widgetsContent', { read: ElementRef }) public widgetsContent: ElementRef<any> = new ElementRef({});
  illnesses:Illness[] = [];
  routeState: any;
  constructor(private diseaseService: DiseaseService,
              private router: Router) {debugger;
      // @ts-ignore
      if (this.router.getCurrentNavigation().extras.state) {
          // @ts-ignore
        this.routeState = this.router.getCurrentNavigation().extras.state;
          if (this.routeState) {debugger;
            this.illnesses = this.routeState.illnesses;
        }
      }

    }


  ngOnInit(): void {
}

}