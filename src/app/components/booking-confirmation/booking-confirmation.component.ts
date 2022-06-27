import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/classes/booking';
import { RentalProperty } from 'src/app/classes/rental-property';
import { User } from 'src/app/classes/user';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-booking-confirmation',
  templateUrl: './booking-confirmation.component.html',
  styleUrls: ['./booking-confirmation.component.css']
})
export class BookingConfirmationComponent implements OnInit {

  constructor(private rentalService: RentalService, private route: ActivatedRoute) { 
    this.bookingVerdict();
  }

  ngOnInit(): void {
   
  }

  bookingVerdict() {
    this.rentalService.acceptVerdict(true);
  }
 
}
