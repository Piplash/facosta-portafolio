import { NgModule } from '@angular/core';

import {  MatButtonModule   } from '@angular/material/button';
import {  MatCardModule     } from '@angular/material/card';
import {  MatDividerModule  } from '@angular/material/divider';
import {  MatIconModule     } from '@angular/material/icon';
import {  MatListModule     } from '@angular/material/list';
import {  MatMenuModule     } from '@angular/material/menu';
import {  MatSidenavModule  } from '@angular/material/sidenav';
import {  MatTabsModule     } from '@angular/material/tabs';
import {  MatToolbarModule  } from '@angular/material/toolbar';


@NgModule({
  exports: [
    MatButtonModule,
    MatCardModule,
    MatDividerModule,
    MatIconModule,
    MatListModule,
    MatMenuModule,
    MatSidenavModule,
    MatTabsModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }
