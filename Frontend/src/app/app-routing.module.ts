import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BrowserModule} from "@angular/platform-browser";
import {HumanBodyComponent} from "./human-body/human-body.component";
import {DiseaseComponent} from "./disease/disease.component";
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';

const routes: Routes = [];

@NgModule({
  imports: [
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home', component: HumanBodyComponent},
      {path: 'illness', component: DiseaseComponent},
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegistrationComponent },
    ]),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
