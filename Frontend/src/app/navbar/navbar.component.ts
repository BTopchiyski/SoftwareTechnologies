import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left'];
  public position = new FormControl(this.positionOptions[0]); 

  constructor() { }

  ngOnInit(): void {
  }

}
