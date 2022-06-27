import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingDeclinedComponent } from './booking-declined.component';

describe('BookingDeclinedComponent', () => {
  let component: BookingDeclinedComponent;
  let fixture: ComponentFixture<BookingDeclinedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BookingDeclinedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingDeclinedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
