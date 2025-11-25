import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(
    private authService: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean {
    const payload = this.authService.getCurrentUser();

    if (payload?.admin === true) {
      return true;
    }

    alert("Access denied: Admins only.");
    this.router.navigate(['/login']);
    return false;
  }
}