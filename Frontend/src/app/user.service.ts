import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {User} from "./models/User";

@Injectable({
  providedIn: 'root'
})
export class UserService {
  API_URL = 'http://localhost:8080'
  constructor(private http: HttpClient) { }

  register(user: User) {debugger;
    return this.http.post(this.API_URL + "/api/auth/signup", {firstName: user.firstName,lastName: user.lastName, username: user.username,
      email: user.email,
      password: user.password});
  }
}
