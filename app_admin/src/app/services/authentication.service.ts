import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  constructor(private http: HttpClient) {}

  // Call backend /login endpoint
  login(email: string, password: string) {
    return this.http.post<{token: string}>('http://localhost:3000/api/login', { email, password });
  }

  // Save token
  saveToken(token: string) {
    localStorage.setItem('travlr-token', token);
  }

  // Get token
  getToken(): string | null {
    return localStorage.getItem('travlr-token');
  }

  // Logout
  logout() {
    localStorage.removeItem('travlr-token');
  }

  // Is user logged in
  isLoggedIn(): boolean {
    return this.getToken() !== null;
  }
}