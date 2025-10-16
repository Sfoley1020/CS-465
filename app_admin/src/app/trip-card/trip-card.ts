import { Component, Input } from '@angular/core';
import { CommonModule, CurrencyPipe } from '@angular/common';   // add CommonModule + CurrencyPipe
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule, CurrencyPipe],   // include them here
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCardComponent {
  @Input() trip!: Trip;

  constructor(
    private router: Router,
    public authService: AuthenticationService
  ) {}

  editTrip(trip: Trip) {
    localStorage.setItem('tripCode', trip.code);
    this.router.navigate(['/edit-trip', trip.code]);
  }
}