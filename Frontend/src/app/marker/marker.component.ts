import {Component, EventEmitter, HostListener, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-marker',
  templateUrl: './marker.component.html',
  styleUrls: ['./marker.component.css']
})
export class MarkerComponent implements OnInit {
  color:string = 'red';
  constructor() { }
  isClicked: boolean=false;

  ngOnInit(): void {
  }

}
