import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DiseaseComponent } from './disease/disease.component';
import { FormsModule } from '@angular/forms';
import { DiseaseDetailsComponent } from './disease-details/disease-details.component'; // <-- NgModel lives here

@NgModule({
  declarations: [
    AppComponent,
    DiseaseComponent,
    DiseaseDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
