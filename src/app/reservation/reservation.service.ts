import { Injectable } from '@angular/core';
import { Reservation } from '../models/reservation';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReservationService {
  private apiUrl = 'http://localhost:3001';
  private reservations: Reservation[] = [];

  constructor(private http: HttpClient) {}

  //CRUD
  getReservations(): Observable<Reservation[]> {
    // return this.reservations;
    return this.http.get<Reservation[]>(this.apiUrl + '/reservations');
  }
  getReservation(id: string): Observable<Reservation> {
    // return this.reservations.find((res) => res.id === id);
    return this.http.get<Reservation>(this.apiUrl + '/reservation/+id');
  }
  addReservation(reservation: Reservation): Observable<void> {
    // reservation.id = Date.now().toString();
    // this.reservations.push(reservation);
    return this.http.post<void>(this.apiUrl + '/reservation', reservation);
  }
  deleteReservation(id: string): Observable<void> {
    // let index = this.reservations.findIndex((res) => res.id === id);
    // this.reservations.splice(index, 1);
    return this.http.delete<void>(this.apiUrl + '/reservation/' + id);
  }
  updateReservation(
    id: string,
    updatedReservation: Reservation
  ): Observable<void> {
    // let index = this.reservations.findIndex((res) => res.id === id);
    // this.reservations[index] = updatedReservation;
    return this.http.put<void>(
      this.apiUrl + '/reservation/+id',
      updatedReservation
    );
  }
}
