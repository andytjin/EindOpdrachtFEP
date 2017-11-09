import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HardwareOverzichtComponent} from './hardware-overzicht/hardware-overzicht.component';
import {HardwareToevoegenComponent} from './hardware-toevoegen/hardware-toevoegen.component';
import {HardwareVerwijderenComponent} from './hardware-verwijderen/hardware-verwijderen.component';
import {HardwareWijzigenComponent} from './hardware-wijzigen/hardware-wijzigen.component';
import {HardwareService} from './hardware-service.service'
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from "../authenticate/authentication.service";
import {ExemplaarModule} from "../exemplaar/exemplaar.module";
import {ReserveringAanmeldenComponent} from "../reserveren/reservering-aanmelden/reservering-aanmelden.component"
import {RouterModule, Routes} from '@angular/router';
import {ExemplaarOverzichtComponent} from "../exemplaar/exemplaar-overzicht/exemplaar-overzicht.component";
import {ExemplaarToevoegenComponent} from "../exemplaar/exemplaar-toevoegen/exemplaar-toevoegen.component";
import {ExemplaarWijzigenComponent} from "../exemplaar/exemplaar-wijzigen/exemplaar-wijzigen.component";
import {ReserveringModule} from "../reserveren/reservering.module";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

const appRoutes: Routes = [
  {path: 'hardwareOverzicht', component: HardwareOverzichtComponent, children:[
    {path: 'hardwareToevoegen', component: HardwareToevoegenComponent, outlet: 'popup'},
    {path: 'hardwareWijzigen/:id', component: HardwareWijzigenComponent, outlet: 'popup'},
    {path: 'hardwareVerwijderen/:id', component: HardwareVerwijderenComponent, outlet: 'popup'}

  ]},

  { path: 'exemplaarOverzicht', component:ExemplaarOverzichtComponent  },
  { path: 'exemplaarToevoegen/:id', component:ExemplaarToevoegenComponent, outlet:'popup'},
  { path: 'exemplaarWijzigen/:id', component: ExemplaarWijzigenComponent, outlet:'popup' },
  {path: 'reserveringAanmelden/:id/:aantal', component: ReserveringAanmeldenComponent, outlet: 'popup'}
  ,
  {
    path: '',
    redirectTo: '/hardwareOverzicht',
    pathMatch: 'full'
  }
];
@NgModule({

  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ExemplaarModule,
    ReserveringModule,
    NgbModule,
    RouterModule.forChild(
      appRoutes
    )
  ],
  declarations: [HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent,ReserveringAanmeldenComponent, HardwareWijzigenComponent],
  exports: [HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent, HardwareWijzigenComponent, ExemplaarOverzichtComponent
    ,ExemplaarToevoegenComponent, ExemplaarWijzigenComponent,ReserveringAanmeldenComponent, RouterModule],
  providers: [HardwareService,AuthenticationService]
})
export class HardwareModule {
}
