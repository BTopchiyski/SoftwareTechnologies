import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiseaseComponent } from './disease/disease.component';
import { FormsModule } from '@angular/forms';
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

import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseaseDetailsComponent,
    HumanBodyComponent,
    MarkerComponent,
    MessagesComponent,
    DashboardComponent,
  ],
  imports: [
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
    MatButtonModule

// The HttpClientInMemoryWebApiModule module intercepts HTTP requests
// and returns simulated server responses.
// Remove it when a real server is ready to receive requests.

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
