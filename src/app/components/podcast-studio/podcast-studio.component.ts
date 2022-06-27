import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import { Booking } from 'src/app/classes/booking';
import { RentalProperyToSend } from 'src/app/classes/rental-propery-to-send';
import { User } from 'src/app/classes/user';
import { RentalService } from 'src/app/services/rental.service';

@Component({
  selector: 'app-podcast-studio',
  templateUrl: './podcast-studio.component.html',
  styleUrls: ['./podcast-studio.component.css']
})
export class PodcastStudioComponent implements OnInit {

  constructor(private rentalService: RentalService, private route: ActivatedRoute, private bottomSheet: MatBottomSheet) {

  }

  reservationPeriod: boolean = false;

 phoneNum: number;

 model = new User('', 0, '');
 
 
 deskNumber: number = 1;

 price: number = 20;



 rental = new RentalProperyToSend( 'Podcast Studio', 'Studio for podcasting', this.price);

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

 



}
