import { NgModule }                     from '@angular/core';

import { Routes, RouterModule }         from '@angular/router';

import { HomeComponent }                from './pages/home/home.component';

import { CvClasicoComponent }           from './pages/cv-clasico/cv-clasico.component';
import { EstudiosComponent }            from './pages/estudios/estudios.component';
import { ExperienciaLaboralComponent }  from './pages/experiencia-laboral/experiencia-laboral.component';
import { PortafolioComponent }          from './pages/portafolio/portafolio.component';
import { SobreMiComponent }             from './pages/sobre-mi/sobre-mi.component';


const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      { path: 'sobre-mi'                , component : SobreMiComponent  },
      { path: 'estudios'                , component : EstudiosComponent  },
      { path: 'experiencia-laboral'     , component : ExperienciaLaboralComponent  },
      { path: 'portafolio'              , component : PortafolioComponent  },
      { path: 'cv-clasico'              , component : CvClasicoComponent  },
      { path: '**'                      , redirectTo: 'sobre-mi'         }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild( routes )
  ],
  exports: [
    RouterModule
  ]
})
export class CurriculumRoutingModule { }
