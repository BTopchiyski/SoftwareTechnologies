import { Component, OnInit } from '@angular/core';

import { Observable, Subject } from 'rxjs';

import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

import { Disease } from '../disease';
import { DiseaseService } from '../disease.service';

@Component({
  selector: 'app-disease-search',
  templateUrl: './disease-search.component.html',
  styleUrls: [ './disease-search.component.css' ]
})
export class DiseaseSearchComponent implements OnInit {
  diseases$!: Observable<Disease[]>;
  private searchTerms = new Subject<string>();

  constructor(private diseaseService: DiseaseService) {}

  // Push a search term into the observable stream.
  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.diseases$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this.diseaseService.searchDiseases(term)),
    );
  }
}
