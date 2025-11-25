import { Routes } from '@angular/router';
import { TripListingComponent } from './trip-listing/trip-listing';
import { AddTripComponent } from './add-trip/add-trip';
import { EditTripComponent } from './edit-trip/edit-trip.component';
import { Login } from './login/login';
import { AdminGuard } from './guards/admin.guard';

export const routes: Routes = [

  // Public login page
  { path: 'login', component: Login },

  // Protected admin-only pages
  { path: 'trips', component: TripListingComponent, canActivate: [AdminGuard] },
  { path: 'add-trip', component: AddTripComponent, canActivate: [AdminGuard] },
  { path: 'edit-trip/:tripCode', component: EditTripComponent, canActivate: [AdminGuard] },

  // Redirect root to login
  { path: '', redirectTo: '/login', pathMatch: 'full' },

  // Catch-all
  { path: '**', redirectTo: '/login' }
];
