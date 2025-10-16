import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.html',
  styleUrls: ['./login.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  error: string = '';

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  onSubmit(): void {
    this.authService.login(this.email, this.password).subscribe({
      next: (response: any) => {
        if (response.token) {
          this.authService.saveToken(response.token);
          this.router.navigate(['/']); // Redirect to main admin page
        }
      },
      error: (err: any) => {
        console.error('Login failed:', err);
        this.error = 'Invalid email or password';
      }
    });
  }
}
