import { Inject, Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';
import { User } from '../models/user';
import { AuthResponse } from '../models/auth-response';
import { BROWSER_STORAGE } from '../storage';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  baseUrl = 'http://localhost:3000/api';

  constructor(
    private http: HttpClient,
    @Inject(BROWSER_STORAGE) private storage: Storage
  ) {}

  // Helper to create headers with JWT
  private getAuthHeaders(): HttpHeaders {
    const token = this.storage.getItem('travlr-token');
    let headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    if (token) {
      headers = headers.set('Authorization', `Bearer ${token}`);
    }
    return headers;
  }

  // GET all trips (no auth required)
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/trips`);
  }

  // GET trip by code (for edit)
  getTripByCode(tripCode: string): Observable<Trip[]> {
    return this.http.get<Trip[]>(`${this.baseUrl}/trips/${tripCode}`);
  }

  // POST new trip (requires auth)
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(
      `${this.baseUrl}/trips`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  // PUT update trip (requires auth)
  updateTrip(tripCode: string, formData: Trip): Observable<Trip> {
    return this.http.put<Trip>(
      `${this.baseUrl}/trips/${tripCode}`,
      formData,
      { headers: this.getAuthHeaders() }
    );
  }

  // NEW: deleteTrip() 
  deleteTrip(tripCode: string): Observable<any> {
    return this.http.delete(
      `${this.baseUrl}/trips/${tripCode}`,
      { headers: this.getAuthHeaders() }
    );
  }

  // LOGIN endpoint - returns JWT
  login(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('login', user, passwd);
  }

  // REGISTER endpoint - creates user and returns JWT
  register(user: User, passwd: string): Observable<AuthResponse> {
    return this.handleAuthAPICall('register', user, passwd);
  }

  // Helper method for login/register
  private handleAuthAPICall(endpoint: string, user: User, passwd: string): Observable<AuthResponse> {
    const formData = {
      name: user.name,
      email: user.email,
      password: passwd
    };

    return this.http.post<AuthResponse>(`${this.baseUrl}/${endpoint}`, formData);
  }
}