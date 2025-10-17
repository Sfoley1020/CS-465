import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { User } from '../models/user';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class Login implements OnInit {
  public formError: string = '';
  submitted = false;

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {}

  ngOnInit(): void {}

  // Handle submit
  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.name || !this.credentials.email || !this.credentials.password) {
      this.formError = 'All fields are required, please try again.';
      this.router.navigateByUrl('/login');
    } else {
      this.doLogin();
    }
  }

  // Perform actual login call
  private doLogin(): void {
    const newUser: User = {
      name: this.credentials.name,
      email: this.credentials.email
    };

    // Call backend login endpoint
    this.authenticationService.login(newUser, this.credentials.password);

    // Wait for token to be saved, then redirect
    setTimeout(() => {
      if (this.authenticationService.isLoggedIn()) {
        this.router.navigate(['']);
      } else {
        this.formError = 'Login failed. Please check your credentials.';
      }
    }, 2000);
  }
}