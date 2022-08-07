import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingsByRefComponent } from './ratings-by-ref.component';

describe('RatingsByRefComponent', () => {
  let component: RatingsByRefComponent;
  let fixture: ComponentFixture<RatingsByRefComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RatingsByRefComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RatingsByRefComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
