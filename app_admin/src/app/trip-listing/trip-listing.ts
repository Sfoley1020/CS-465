import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

import { Trip } from '../models/trip';
import { TripDataService } from '../services/trip-data.service';
import { TripCard } from '../trip-card/trip-card';

@Component({
  selector: 'app-trip-listing',
  standalone: true,
  imports: [CommonModule, TripCard],
  templateUrl: './trip-listing.html',     
  styleUrls: ['./trip-listing.css'],      
  providers: [TripDataService]
})
export class TripListingComponent implements OnInit {
  trips!: Trip[];
  message = '';

  constructor(
    private tripDataService: TripDataService,
    private router: Router
  ) {
    console.log('trip-listing constructor');
  }

  public addTrip(): void {
    this.router.navigate(['/add-trip']);       
  }

  private getStuff(): void {
    this.tripDataService.getTrips().subscribe({
      next: (value: Trip[]) => {
        this.trips = value ?? [];
        this.message = this.trips.length
          ? `There are ${this.trips.length} trips available.`
          : 'There were no trips retrieved from the database.';
        console.log(this.message);
      },
      error: (err) => { this.message = 'Error contacting API'; console.log('Error:', err); }
    });
  }

  ngOnInit(): void {
    console.log('ngOnInit');
    this.getStuff();
  }
}