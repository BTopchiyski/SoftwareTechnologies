import {Component, HostListener, OnInit} from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {
  color:string = 'red';
  constructor() { }

  ngOnInit(): void {
  }

}
