export class User {
  email: string;
  name: string;
  admin?: boolean; // <-- ADD 

  constructor() {
    this.email = '';
    this.name = '';
    this.admin = false; 
  }
}