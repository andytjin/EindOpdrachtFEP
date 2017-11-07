import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {AppComponent} from "./app.component";
import {RouterModule, Routes} from "@angular/router";
//npm install firebase angularfire2 --save
import {AngularFireModule} from "angularfire2";
import {HardwareService} from "./hardware/hardware-service.service";
import * as firebase from "firebase";
import {AngularFireDatabaseModule} from "angularfire2/database";
import {AuthenticationComponent} from "./authenticate/authentication/authentication.component";
import {AuthenticationService} from "./authenticate/authentication.service";
import {ExemplaarService} from "./exemplaar/exemplaar-service.service";
import {HardwareModule} from "./hardware/hardware.module";
import {ReserveringModule} from "./reserveren/reservering.module";
import {HardwareOverzichtComponent} from "./hardware/hardware-overzicht/hardware-overzicht.component";
import {ReserveringOverzichtComponent} from "./reserveren/reservering-overzicht/reservering-overzicht.component";
import {HardwareToevoegenComponent} from "./hardware/hardware-toevoegen/hardware-toevoegen.component";
import {HardwareWijzigenComponent} from "./hardware/hardware-wijzigen/hardware-wijzigen.component";

const appRoutes: Routes = [
  {path: 'hardwareOverzicht', component: HardwareOverzichtComponent, outlet: 'overzicht'},
 {path: 'reserveringOverzicht', component: ReserveringOverzichtComponent,outlet:'overzicht'},
  {path: 'hardwareToevoegen', component: HardwareToevoegenComponent, outlet: 'popup'},
  {path: 'hardwareWijzigen/:id', component: HardwareWijzigenComponent, outlet: 'popup'},


  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
];
export const firebaseConfig = {
  apiKey: "AIzaSyCAPID67_YN3YudiWtWeDArpzgPg9OklVc",
  authDomain: "eindopdrachtfep.firebaseapp.com",
  databaseURL: "https://eindopdrachtfep.firebaseio.com",
  projectId: "eindopdrachtfep",
  storageBucket: "eindopdrachtfep.appspot.com",
  messagingSenderId: "697311754605"
};
firebase.initializeApp(firebaseConfig);
//de route paden van alle pages


@NgModule({
  declarations: [
    AppComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HardwareModule,
    ReserveringModule,
    AngularFireDatabaseModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],

  exports:[HardwareOverzichtComponent,ReserveringOverzichtComponent,HardwareToevoegenComponent,HardwareWijzigenComponent],
  providers: [HardwareService, AuthenticationService, AuthenticationComponent, ExemplaarService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
