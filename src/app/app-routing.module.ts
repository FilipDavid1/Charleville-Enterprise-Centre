import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DeskAndMembershipComponent } from './components/desk-and-membership/desk-and-membership.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { RentalDetailComponent } from './components/rental-detail/rental-detail.component';
import { ContactComponent } from './components/contact/contact.component';
import { BookingConfirmationComponent } from './components/booking-confirmation/booking-confirmation.component';
import { MeetingRoomComponent } from './components/meeting-room/meeting-room.component';
import { PodcastStudioComponent } from './components/podcast-studio/podcast-studio.component';
import { BookingDeclinedComponent } from './components/booking-declined/booking-declined.component';


const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePageComponent },
  { path: 'desk-and-membership', component: DeskAndMembershipComponent },
  { path: 'rental-detail/:id', component: RentalDetailComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'booking-accepted', component: BookingConfirmationComponent },
  { path: 'booking-declined', component: BookingDeclinedComponent},
  { path: 'meeting-room', component: MeetingRoomComponent },
  { path: 'podcast-studio', component: PodcastStudioComponent },
  { path: '**', redirectTo: '/home' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
