import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import {
  FormBuilder,
  FormGroup,
  Validators,
  ReactiveFormsModule
} from '@angular/forms';
import { TripDataService } from '../services/trip-data.service';
import { Trip } from '../models/trip';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {

  public editForm!: FormGroup;
  trip!: Trip;
  submitted = false;
  message: string = '';

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripDataService: TripDataService
  ) {}

  ngOnInit(): void {
    let tripCode = localStorage.getItem('tripCode');
    if (!tripCode) {
      alert("Error: Could not find stored trip code.");
      this.router.navigate(['/trips']);
      return;
    }

    this.editForm = this.formBuilder.group({
      _id: [],
      code: [tripCode, Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    this.tripDataService.getTripByCode(tripCode).subscribe({
      next: (value: any) => {
        this.trip = value[0];
        this.editForm.patchValue(value[0]);
      },
      error: (err) => console.log("Error retrieving trip:", err)
    });
  }

  // UPDATE TRIP
  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      const tripCode = this.editForm.value.code;

      this.tripDataService.updateTrip(tripCode, this.editForm.value).subscribe({
        next: () => {
          alert("Trip updated successfully!");
          this.router.navigate(['/trips']);   // FIXED (prevents logout)
        },
        error: (err) => {
          console.log("Error updating trip:", err);
        }
      });
    }
  }

  // DELETE TRIP
  public deleteTrip(): void {
    const tripCode = this.editForm.value.code;

    if (!confirm(`Delete trip ${tripCode}?`)) return;

    this.tripDataService.deleteTrip(tripCode).subscribe({
      next: () => {
        alert(`Trip ${tripCode} deleted.`);
        this.router.navigate(['/trips']);   // FIXED (prevents logout)
      },
      error: (err) => console.log("Error deleting trip:", err)
    });
  }

  get f() {
    return this.editForm.controls;
  }
}