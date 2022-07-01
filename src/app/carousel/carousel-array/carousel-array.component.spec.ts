import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselArrayComponent } from './carousel-array.component';

describe('CarouselArrayComponent', () => {
  let component: CarouselArrayComponent;
  let fixture: ComponentFixture<CarouselArrayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselArrayComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselArrayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
