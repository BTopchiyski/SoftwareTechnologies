import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {HumanBodyComponent} from "./human-body/human-body.component";
import {DiseaseComponent} from "./disease/disease.component";

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HumanBodyComponent},
      {path: 'illness', component: DiseaseComponent},
      { path: '',   redirectTo: '/home', pathMatch: 'full' },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
