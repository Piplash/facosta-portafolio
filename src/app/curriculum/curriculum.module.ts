import { NgModule }                     from '@angular/core';
import { CommonModule }                 from '@angular/common';

import { CarouselModule }               from '../carousel/carousel.module';
import { CurriculumRoutingModule }      from './curriculum-routing.module';
import { FlexLayoutModule }             from '@angular/flex-layout';
import { MaterialModule }               from '../material/material.module';
import { NgxExtendedPdfViewerModule }   from 'ngx-extended-pdf-viewer';
import { RouterModule }                 from '@angular/router';

import { HomeComponent }                from './pages/home/home.component';
import { SobreMiComponent }             from './pages/sobre-mi/sobre-mi.component';
import { EstudiosComponent }            from './pages/estudios/estudios.component';
import { ExperienciaLaboralComponent }  from './pages/experiencia-laboral/experiencia-laboral.component';
import { CvClasicoComponent }           from './pages/cv-clasico/cv-clasico.component';
import { PortafolioComponent }          from './pages/portafolio/portafolio.component';





@NgModule({
  declarations: [
    HomeComponent,
    SobreMiComponent,
    EstudiosComponent,
    ExperienciaLaboralComponent,
    CvClasicoComponent,
    PortafolioComponent
  ],
  imports: [
    CarouselModule,
    CommonModule,
    CurriculumRoutingModule,
    FlexLayoutModule,
    MaterialModule,
    NgxExtendedPdfViewerModule,
    RouterModule
  ]
})
export class CurriculumModule { }
