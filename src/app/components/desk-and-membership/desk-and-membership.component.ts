import { Component, OnInit } from '@angular/core';
import { RentalProperty } from 'src/app/classes/rental-property';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-desk-and-membership',
  templateUrl: './desk-and-membership.component.html',
  styleUrls: ['./desk-and-membership.component.css']
})
export class DeskAndMembershipComponent implements OnInit {

  constructor(private rentalService: RentalService) { 
  }

  ngOnInit(): void {
    this.getRentals();
  }

  hotDesk: RentalProperty;
  dedicatedDesk: RentalProperty;
  

  getRentals(): void {
    this.rentalService.getAllProperties().subscribe(rentals => {
      this.hotDesk = rentals[0];
      this.dedicatedDesk = rentals[1];
      this.rentalProperties = [this.hotDesk, this.dedicatedDesk];
    });
  }
  rentalProperties: RentalProperty[];
}
