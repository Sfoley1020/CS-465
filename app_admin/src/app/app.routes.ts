import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { AddTripComponent } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { Login } from './login/login';

export const routes: Routes = [
  { path: '', component: TripListingComponent },             // main page
  { path: 'add-trip', component: AddTripComponent },         // add
  { path: 'edit-trip/:tripCode', component: EditTripComponent }, // edit
  { path: 'login', component: Login }               //  new login page
];