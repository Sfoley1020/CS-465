import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { AuthenticationService } from '../services/authentication.service';
import { TripCardComponent } from '../trip-card/trip-card';   // import TripCardComponent

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCardComponent],   //  add TripCardComponent here
  templateUrl: './trip-listing.html',
  styleUrls: ['./trip-listing.css']
})
export class TripListingComponent implements OnInit {
  trips: Trip[] = [];

  constructor(
    private tripDataService: TripDataService,
    private router: Router,
    public authService: AuthenticationService
  ) {}

  ngOnInit(): void {
    this.loadTrips();
  }

  loadTrips(): void {
    this.tripDataService.getTrips().subscribe({
      next: (data: Trip[]) => (this.trips = data),
      error: (err) => console.error('Error fetching trips:', err)
    });
  }

  addTrip(): void {
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['/add-trip']);
    } else {
      alert('You must be logged in to add a trip.');
      this.router.navigate(['/login']);
    }
  }

  editTrip(tripCode: string): void {
    if (this.authService.isLoggedIn()) {
      localStorage.setItem('tripCode', tripCode);
      this.router.navigate(['/edit-trip', tripCode]);
    } else {
      alert('You must be logged in to edit a trip.');
      this.router.navigate(['/login']);
    }
  }
}