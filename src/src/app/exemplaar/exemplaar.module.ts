import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplaarOverzichtComponent } from './exemplaar-overzicht/exemplaar-overzicht.component';
import { ExemplaarToevoegenComponent } from './exemplaar-toevoegen/exemplaar-toevoegen.component';
import { ExemplaarWijzigenComponent } from './exemplaar-wijzigen/exemplaar-wijzigen.component';
import {ExemplaarService} from './exemplaar-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {RouterModule, Routes, Router} from '@angular/router';
import {AuthenticationService} from "../authenticate/authentication.service";

const appRoutes: Routes = [
  { path: 'exemplaarOverzicht', component:ExemplaarOverzichtComponent,
    children:[
    { path: 'exemplaarToevoegen/:id', component:ExemplaarToevoegenComponent, outlet:'popup'},
    { path: 'exemplaarWijzigen/:id', component: ExemplaarWijzigenComponent, outlet:'popup' },

  ]},


  { path: '',
    redirectTo: '/exemplaarOverzicht',
    pathMatch: 'full'
  }
];
@NgModule({

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [ExemplaarOverzichtComponent, ExemplaarToevoegenComponent, ExemplaarWijzigenComponent],
  exports:[ExemplaarOverzichtComponent, ExemplaarToevoegenComponent, ExemplaarWijzigenComponent, RouterModule],
  providers:[ExemplaarService,AuthenticationService]
})
export class ExemplaarModule { }
