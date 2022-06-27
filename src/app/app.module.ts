import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { DeskAndMembershipComponent } from './components/desk-and-membership/desk-and-membership.component';
import {MatButtonModule} from '@angular/material/button';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatNativeDateModule} from '@angular/material/core';
import { HttpClientModule } from '@angular/common/http';
import { ContactComponent } from './components/contact/contact.component';
import { NavbarModule, WavesModule } from 'angular-bootstrap-md';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { MeetingRoomComponent } from './components/meeting-room/meeting-room.component'
import { ModalModule, TooltipModule, PopoverModule, ButtonsModule } from 'angular-bootstrap-md';
import {MatStepperModule} from '@angular/material/stepper';
import {MatBottomSheetModule} from '@angular/material/bottom-sheet';
import { PodcastStudioComponent } from './components/podcast-studio/podcast-studio.component';
import { BookingDeclinedComponent } from './components/booking-declined/booking-declined.component';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    DeskAndMembershipComponent,
    RentalDetailComponent,
    ContactComponent,
    BookingConfirmationComponent,
    MeetingRoomComponent,
    PodcastStudioComponent,
    BookingDeclinedComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    NgbModule,
    MatDatepickerModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    HttpClientModule,
    NavbarModule,
    WavesModule,
    ModalModule, 
    TooltipModule,
    PopoverModule,
    ButtonsModule,
    MatStepperModule,
    MatBottomSheetModule,
    MatDialogModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
