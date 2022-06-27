import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PodcastStudioComponent } from './podcast-studio.component';

describe('PodcastStudioComponent', () => {
  let component: PodcastStudioComponent;
  let fixture: ComponentFixture<PodcastStudioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PodcastStudioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PodcastStudioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
