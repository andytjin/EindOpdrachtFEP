import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from "../authenticate/authentication.service";

import {RouterModule, Routes} from '@angular/router';
import {ReserveringOverzichtComponent} from "./reservering-overzicht/reservering-overzicht.component";
import {ReserveringService} from "./reservering-service.service";
import {HardwareService} from "../hardware/hardware-service.service";

const appRoutes: Routes = [
  {path: 'reserveringOverzicht', component: ReserveringOverzichtComponent},
  {
    path: '',
    redirectTo: '/reserveringOverzicht',
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
  declarations: [ReserveringOverzichtComponent],
  exports: [ReserveringOverzichtComponent],
  providers: [ReserveringService,AuthenticationService,HardwareService]
})
export class ReserveringModule {
}
