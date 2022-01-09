export class User {
  id: number;
  username: string;
  password: string;
  email:string;
  token: string;
  firstName: string;
  lastName:string;

  constructor( id: number,firstName: string,lastName: string, username: string,email:string, password: string, token: string) {
    this.id = id;
    this.username = username;
    this.password = password;
    this.email = email;   
    this.token = token;
    this.firstName = firstName;
    this.lastName = lastName;
  }
}
