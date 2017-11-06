import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {AuthenticationService} from "../authenticate/authentication.service";

import {RouterModule, Routes} from '@angular/router';
import {ReserveringOverzichtComponent} from "./reservering-overzicht/reservering-overzicht.component";
import {ReserveringAanmeldenComponent} from "./reservering-aanmelden/reservering-aanmelden.component";
import {ReserveringAnnulerenComponent} from "./reservering-annuleren/reservering-annuleren.component";
import {ReserveringService} from "./reservering-service.service";

const appRoutes: Routes = [
  {path: 'reserveringOverzicht', component: ReserveringOverzichtComponent},
  {path: 'reserveringAanmelden/:id', component: ReserveringAanmeldenComponent, outlet: 'popup'},
  {path: 'reserveringAnnuleren/:id', component: ReserveringAnnulerenComponent, outlet: 'popup'},
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
  declarations: [ReserveringOverzichtComponent, ReserveringAanmeldenComponent, ReserveringAnnulerenComponent],
  exports: [ReserveringOverzichtComponent, ReserveringAanmeldenComponent, ReserveringAnnulerenComponent],
  providers: [ReserveringService,AuthenticationService]
})
export class ReserveringModule {
}
