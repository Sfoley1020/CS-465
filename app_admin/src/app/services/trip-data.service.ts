import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Trip } from '../models/trip';

@Injectable({
  providedIn: 'root'
})
export class TripDataService {
  private url = 'http://localhost:3000/api/trips';  // shared base URL

  constructor(private http: HttpClient) {}

  // get all trips
  getTrips(): Observable<Trip[]> {
    return this.http.get<Trip[]>(this.url);
  }

  // add a new trip
  addTrip(formData: Trip): Observable<Trip> {
    return this.http.post<Trip>(this.url, formData);
  }

  // 🆕 get one trip by its code
  getTripByCode(tripCode: string): Observable<Trip> {
    const url = `${this.url}/${tripCode}`;
    return this.http.get<Trip>(url);
  }

  // 🆕 update an existing trip
  updateTrip(tripCode: string, formData: Trip): Observable<Trip> {
    const url = `${this.url}/${tripCode}`;
    return this.http.put<Trip>(url, formData);
  }
}

