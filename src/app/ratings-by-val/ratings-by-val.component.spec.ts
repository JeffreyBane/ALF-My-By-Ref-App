import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsByValComponent } from './ratings-by-val.component';

describe('RatingsByValComponent', () => {
  let component: RatingsByValComponent;
  let fixture: ComponentFixture<RatingsByValComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsByValComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsByValComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
