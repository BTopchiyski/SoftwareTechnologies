import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { TooltipPosition } from '@angular/material/tooltip';
import { Router } from '@angular/router';
import { AuthenticationService } from '../authentication.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  public positionOptions: TooltipPosition[] = ['left'];
  public position = new FormControl(this.positionOptions[0]); 

  constructor(private authenticationService:AuthenticationService,
    private router: Router,) {       
    }

  ngOnInit(): void {
    
  }

  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
}
}
