import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';

//npm install firebase angularfire2 --save
import { AngularFireModule } from 'angularfire2';
import { HardwareModule } from './hardware/hardware.module';
import { ExemplaarModule} from './exemplaar/exemplaar.module'
import {HardwareService} from "./hardware/hardware-service.service";
import * as firebase from "firebase";
import { AngularFireDatabaseModule} from "angularfire2/database";
import { AuthenticationComponent } from './authenticate/authentication/authentication.component';
import { AuthenticationService } from './authenticate/authentication.service';
import { ExemplaarService } from "./exemplaar/exemplaar-service.service";

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
    ExemplaarModule,
    AngularFireDatabaseModule,
  ],
  providers: [HardwareService, AuthenticationService, AuthenticationComponent, ExemplaarService],
  bootstrap: [AppComponent]
})
export class AppModule { }
