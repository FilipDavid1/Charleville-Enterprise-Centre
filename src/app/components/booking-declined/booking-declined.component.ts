import { Component, OnInit } from '@angular/core';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-booking-declined',
  templateUrl: './booking-declined.component.html',
  styleUrls: ['./booking-declined.component.css']
})
export class BookingDeclinedComponent implements OnInit {

  constructor(private rentalService: RentalService) {
    this.bookingVerdict();
   }

  ngOnInit(): void {
    
  }

  bookingVerdict() {
    this.rentalService.declineVerdict(false);
  }

}
