import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { AuthenticationService } from '../services/authentication.service';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private apiBaseUrl = 'http://localhost:3000/api/';

  constructor(
    private http: HttpClient,
    private authService: AuthenticationService
  ) {}

  // Helper to create headers with JWT
  private getAuthHeaders(): HttpHeaders {
    const token = this.authService.getToken();
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  // GET all trips (no auth required)
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}trips`);
  }

  // GET trip by code (for edit)
  getTripByCode(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.apiBaseUrl}trips/${tripCode}`);
  }

  // POST new trip (requires auth)
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      `${this.apiBaseUrl}trips`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  // PUT update trip (requires auth)
  updateTrip(tripCode: string, formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.apiBaseUrl}trips/${tripCode}`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }
}