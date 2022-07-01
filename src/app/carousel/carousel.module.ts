import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarouselComponent } from './carousel.component';
import { MaterialModule } from '../material/material.module';

@NgModule({
  declarations: [
    CarouselComponent
  ],
  exports: [
    CarouselComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class CarouselModule { }
