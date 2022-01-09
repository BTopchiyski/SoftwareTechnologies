import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiseaseComponent } from './disease/disease.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component';
import { HumanBodyComponent } from './human-body/human-body.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'; // <-- NgModel lives here
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatListModule} from '@angular/material/list';
import {MatTableModule} from '@angular/material/table';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { MarkerComponent } from './marker/marker.component';
import {MatButtonModule} from '@angular/material/button';
import { MessagesComponent } from './messages/messages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MatCardModule } from '@angular/material/card';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { DoctorHumanBodyComponent } from './doctor-human-body/doctor-human-body.component';
import { AlertComponent } from './alert/alert.component';
import { JwtInterceptor } from './helpers/jwt.interceptor';
import { MatIconModule } from '@angular/material/icon'
import { MatMenuModule} from '@angular/material/menu';
import {MatTooltipModule} from '@angular/material/tooltip';
import { NavbarComponent } from './navbar/navbar.component';
import { CarouselModule } from 'ngx-bootstrap/carousel';

@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseaseDetailsComponent,
    HumanBodyComponent,
    MarkerComponent,
    MessagesComponent,
    DashboardComponent,
    LoginComponent,
    RegistrationComponent,
    DoctorHumanBodyComponent,
    AlertComponent,
    NavbarComponent
  ],
  imports: [
    CarouselModule.forRoot(),
    MatCardModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatListModule,
    MatTableModule,
    MatCheckboxModule,
    HttpClientModule,
    MatButtonModule,    
    ReactiveFormsModule,
    MatIconModule,
    MatMenuModule,
    MatTooltipModule,

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
