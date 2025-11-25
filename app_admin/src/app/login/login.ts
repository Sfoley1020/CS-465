import { Component } from '@angular/core';
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
export class Login {
  public formError: string = '';

  credentials = {
    name: '',
    email: '',
    password: ''
  };

  constructor(
    private router: Router,
    private authService: AuthenticationService
  ) {}

  public onLoginSubmit(): void {
    this.formError = '';

    if (!this.credentials.email || !this.credentials.password || !this.credentials.name) {
      this.formError = 'All fields are required.';
      return;
    }

    const user: User = {
      name: this.credentials.name,
      email: this.credentials.email
    };

    this.authService.login(user, this.credentials.password)
      .subscribe({
        next: (resp) => {
          this.authService.saveToken(resp.token);

          const payload = this.authService.getCurrentUser();

          if (payload?.admin === true) {
            this.router.navigate(['/trips']);
          } else {
            this.formError = 'Access denied — Admins only.';
            this.authService.logout();
          }
        },
        error: () => {
          this.formError = 'Login failed. Check your credentials.';
        }
      });
  }
}
