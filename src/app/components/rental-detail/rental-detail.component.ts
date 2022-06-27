import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/classes/booking';
import { RentalProperty } from 'src/app/classes/rental-property';
import { RentalProperyToSend } from 'src/app/classes/rental-propery-to-send';
import { User } from 'src/app/classes/user';
import { RentalService } from 'src/app/services/rental.service';


@Component({
  selector: 'app-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  reservationPeriod: boolean = false;

  phoneNum: number;

  model = new User('', 0, '');
  
  
  deskNumber: number = 1;

  price: number = 240;

  rental = new RentalProperty(0, '', '', this.price);

  rental2 = new RentalProperyToSend( '', '', this.price);

  booking = new Booking('', '','','', 0, false);

  now = new Date();
  startDate = new Date();
  endDate = new Date();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  start = { hour: 8, minute: 0 };
  end = { hour: 13, minute: 30 };

  constructor(private rentalService: RentalService, private route: ActivatedRoute, private bottomSheet: MatBottomSheet) {}

  //tests what type of desk is used and checks for period of rent

  rentalTester() {
    if (this.rental.name == 'Hot Desk' || this.rental.name == 'Dedicated Desk') {
      if (this.startDate.getMonth() == this.endDate.getMonth() && this.endDate.getDate() - this.startDate.getDate() >= 30) {
        this.reservationPeriod = true;
        this.price = 240 * this.deskNumber;
      }
      else if (this.startDate.getMonth() != this.endDate.getMonth() && this.endDate.getDate() - this.startDate.getDate() >= 0) {
        this.reservationPeriod = true;
        this.price = 240 * this.deskNumber;
      }
      else {
        this.reservationPeriod = false;
        alert('Period Have to be at least one Month!')
      }
    }
  }



  ngOnInit(): void {
    this.getProperty();
  }

  counterPlus() {
    this.deskNumber++;
  }
  counterMinus() {
    if (this.deskNumber > 1) {
      this.deskNumber--;
    }
  }

  getProperty(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.rentalService.getProperty(id)
      .subscribe(rental => {
        this.rental = rental;
        this.rental2.name = rental.name;
        this.rental2.description = rental.description;
      });
  }

  onSubmit() {
    this.booking.numberOfDesk = this.deskNumber;
    this.booking.startTime = this.start.hour + ':' + this.start.minute;
    this.booking.endTime = this.end.hour + ':' + this.end.minute;
    this.booking.startDate = this.startDate.getDate() + '.' + (this.startDate.getMonth() + 1) + '.' + this.startDate.getFullYear();
    this.booking.endDate = this.endDate.getDate() + '.' + (this.endDate.getMonth() + 1) + '.' + this.endDate.getFullYear();
    this.model.phoneNum = this.phoneNum;

    this.rentalService.bookProperty(this.rental2, this.booking, this.model);
    
  }

// user detail form
  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  openTemplateSheetMenu() {
    this.bottomSheet.open(this.TemplateBottomSheet);
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }

  dates: Date[];

  // getBookedDays() {
  //   this.rentalService.getReservedDates().subscribe(dates => {
  //     let i = new Date(dates[0]);
  //     this.dates[0] = i;
  //   });}
  //   datesTest = [
  //                   new Date("5/5/2022"),
  //                   new Date("5/6/2022"),
  //                   new Date("5/7/2022"),
  //                   new Date("5/8/2022"),
  //                   new Date("5/9/2022"),
  //                   //month day year
  //   ]

  //   bookedDaysFilter = (d: Date): boolean => {
  //     const time=d.getTime();
  //     return !this.dates.find(x=>x.getTime()===time);
  //   }
  
}
