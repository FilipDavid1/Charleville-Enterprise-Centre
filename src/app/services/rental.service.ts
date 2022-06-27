import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { Booking } from '../classes/booking';
import { RentalProperty } from '../classes/rental-property';
import { RentalProperyToSend } from '../classes/rental-propery-to-send';
import { User } from '../classes/user';


@Injectable({
  providedIn: 'root'
})
export class RentalService {

  constructor(private http: HttpClient, private router: Router) { }

  //
  bookProperty(workingPlace: RentalProperyToSend, booking: Booking, guest: User,) {
    let merged = { ...booking, workingPlace, guest };
    return fetch('http://localhost:8080/save/booking', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(merged),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }


  //display all properties
  getAllProperties(): Observable<RentalProperty[]> {
    return this.http.get<RentalProperty[]>('http://localhost:8080/workingPlace');
  }
  //display specific property
  getProperty(id: number): Observable<RentalProperty> {
    return this.http.get<RentalProperty>(`http://localhost:8080/workingPlace/${id}`);
  }


  // accept reservation through email
  acceptVerdict(bool: boolean) {
    return fetch('http://localhost:8080/booking/accept', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bool),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // decline reservation through email
  declineVerdict(bool: boolean) {
    return fetch('http://localhost:8080/booking/deny', {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(bool),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }

  // getReservedDates(): Observable<Date[]> {
  //   return this.http.get<Date[]>('http://localhost:8080/booking/bookedDays');
  // }
}

