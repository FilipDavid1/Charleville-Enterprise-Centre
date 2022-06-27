import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeskAndMembershipComponent } from './desk-and-membership.component';

describe('DeskAndMembershipComponent', () => {
  let component: DeskAndMembershipComponent;
  let fixture: ComponentFixture<DeskAndMembershipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeskAndMembershipComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeskAndMembershipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
