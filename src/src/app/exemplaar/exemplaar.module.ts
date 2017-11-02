import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExemplaarOverzichtComponent } from './exemplaar-overzicht/exemplaar-overzicht.component';
import { ExemplaarToevoegenComponent } from './exemplaar-toevoegen/exemplaar-toevoegen.component';
import { ExemplaarWijzigenComponent } from './exemplaar-wijzigen/exemplaar-wijzigen.component';
import { ExemplaarVerwijderenComponent } from './exemplaar-verwijderen/exemplaar-verwijderen.component';
import {ExemplaarService} from './exemplaar-service.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { RouterModule, Routes } from '@angular/router';

const appRoutes: Routes = [
  { path: 'exemplaarOverzicht', component:ExemplaarOverzichtComponent  },
  { path: 'exemplaarToevoegen', component:ExemplaarToevoegenComponent, outlet:'popup'},
  { path: 'exemplaarWijzigen/:id', component: ExemplaarWijzigenComponent, outlet:'popup' },
  { path: 'exemplaarVerwijderen/:id', component: ExemplaarVerwijderenComponent, outlet:'popup'}
  ,
  { path: '',
    redirectTo: '/exemplaarOverzicht',
    pathMatch: 'full'
  }
];
@NgModule({

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [ExemplaarOverzichtComponent, ExemplaarToevoegenComponent, ExemplaarWijzigenComponent, ExemplaarVerwijderenComponent],
  exports:[ExemplaarOverzichtComponent, ExemplaarToevoegenComponent, ExemplaarWijzigenComponent, ExemplaarVerwijderenComponent],
  providers:[ExemplaarService]
})
export class ExemplaarModule { }
