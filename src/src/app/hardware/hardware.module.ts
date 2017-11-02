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

import {RouterModule, Routes} from '@angular/router';

const appRoutes: Routes = [
  {path: 'hardwareOverzicht', component: HardwareOverzichtComponent},
  {path: 'hardwareToevoegen', component: HardwareToevoegenComponent, outlet: 'popup'},
  {path: 'hardwareWijzigen/:id', component: HardwareWijzigenComponent, outlet: 'popup'},
  {path: 'hardwareVerwijderen/:id', component: HardwareVerwijderenComponent, outlet: 'popup'}
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
    RouterModule.forRoot(
      appRoutes
    )
  ],
  declarations: [HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent, HardwareWijzigenComponent],
  exports: [HardwareOverzichtComponent, HardwareToevoegenComponent, HardwareVerwijderenComponent, HardwareWijzigenComponent],
  providers: [HardwareService,AuthenticationService]
})
export class HardwareModule {
}
