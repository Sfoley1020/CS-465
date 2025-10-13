import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { TripDataService } from '../services/trip-data.service';

@Component({
  selector: 'app-edit-trip',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './edit-trip.component.html',
  styleUrls: ['./edit-trip.component.css']
})
export class EditTripComponent implements OnInit {
  editForm!: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private tripService: TripDataService
  ) {}

  ngOnInit(): void {
    // initialize form
    this.editForm = this.formBuilder.group({
      _id: [],
      code: ['', Validators.required],
      name: ['', Validators.required],
      length: ['', Validators.required],
      start: ['', Validators.required],
      resort: ['', Validators.required],
      perPerson: ['', Validators.required],
      image: ['', Validators.required],
      description: ['', Validators.required]
    });

    //  Load the existing trip to edit
    const tripCode = localStorage.getItem('tripCode');
    if (tripCode) {
      this.tripService.getTripByCode(tripCode).subscribe({
        next: (data: any) => {
          this.editForm.patchValue(data[0]); // populate form
        },
        error: (error) => console.log('Error loading trip:', error)
      });
    }
  }

  // form controls getter (used by [ngClass])
  get f() {
    return this.editForm.controls;
  }

  //  handle form submission
  public onSubmit(): void {
    this.submitted = true;

    if (this.editForm.valid) {
      const tripCode = this.editForm.value.code;
      this.tripService.updateTrip(tripCode, this.editForm.value).subscribe({
        next: () => {
          console.log('Trip updated successfully');
          this.router.navigate(['']); // return to trip list
        },
        error: (error) => {
          console.log('Error updating trip:', error);
        }
      });
    }
  }
}