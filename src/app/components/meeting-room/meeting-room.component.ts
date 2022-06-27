import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatDialog } from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/classes/booking';
import { RentalProperty } from 'src/app/classes/rental-property';
import { RentalProperyToSend } from 'src/app/classes/rental-propery-to-send';
import { User } from 'src/app/classes/user';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-meeting-room',
  templateUrl: './meeting-room.component.html',
  styleUrls: ['./meeting-room.component.css']
})
export class MeetingRoomComponent implements OnInit {

  constructor(private rentalService: RentalService, private route: ActivatedRoute, private bottomSheet: MatBottomSheet, public dialog: MatDialog) {

   }

   reservationPeriod: boolean = false;

  phoneNum: number;

  model = new User('', 0, '');
  
  
  deskNumber: number = 1;

  price: number = 240;



  rental = new RentalProperyToSend( 'Meeting Room', 'We have a multifunction meeting room, that can be used for group or one to one meetings and can be configured in a number of ways', this.price);

  booking = new Booking('', '','','', 0, false);

  now = new Date();
  startDate = new Date();
  endDate = new Date();

  range = new FormGroup({
    start: new FormControl(),
    end: new FormControl(),
  });

  start = { hour: 9, minute: 0 };
  end = { hour: 18, minute: 0 };

  

  //tests what type of desk is used and checks for period of rent

  



  ngOnInit(): void {

  }

  counterPlus() {
    this.deskNumber++;
  }
  counterMinus() {
    if (this.deskNumber > 1) {
      this.deskNumber--;
    }
  }

 
  

  onSubmit() {
    this.booking.numberOfDesk = this.deskNumber;
    this.booking.startTime = this.start.hour + ':' + this.start.minute;
    this.booking.endTime = this.end.hour + ':' + this.end.minute;
    this.booking.startDate = this.startDate.getDate() + '.' + (this.startDate.getMonth() + 1) + '.' + this.startDate.getFullYear();
    this.booking.endDate = this.endDate.getDate() + '.' + (this.endDate.getMonth() + 1) + '.' + this.endDate.getFullYear();
    this.model.phoneNum = this.phoneNum;

    this.rentalService.bookProperty(this.rental, this.booking, this.model);
    
  }

// user detail form
  @ViewChild('templateBottomSheet') TemplateBottomSheet: TemplateRef<any>;

  openTemplateSheetMenu() {
    this.bottomSheet.open(this.TemplateBottomSheet);
  }

  closeTemplateSheetMenu() {
    this.bottomSheet.dismiss();
  }


  @ViewChild('dialogRef')
  dialogRef!: TemplateRef<any>;

  openTempDialog() {
    const myTempDialog = this.dialog.open(this.dialogRef);
    myTempDialog.afterClosed();

  }
}
