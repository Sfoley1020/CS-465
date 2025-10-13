import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-trip-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './trip-card.html',
  styleUrls: ['./trip-card.css']
})
export class TripCard {
  @Input() trip!: Trip;

  constructor(private router: Router) {}

  editTrip(trip: Trip): void {
    // Save trip code to localStorage for the EditTrip component to use
    localStorage.setItem('tripCode', trip.code);
    console.log('Editing trip:', trip.code);
    // Navigate to edit-trip route
    this.router.navigate(['/edit-trip']);
  }
}