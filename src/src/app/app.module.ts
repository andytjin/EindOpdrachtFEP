import { BrowserModule } from '@angular/platform-browser';
import { NgModule} from '@angular/core';
import { AppComponent } from './app.component';
//npm install firebase angularfire2 --save
import { AngularFireModule } from 'angularfire2';
import { HardwareModule } from './hardware/hardware.module';
import { AngularFireDatabase } from 'angularfire2/database';
import {HardwareService} from "./hardware/hardware-service.service";
import * as firebase from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyCAPID67_YN3YudiWtWeDArpzgPg9OklVc",
  authDomain: "eindopdrachtfep.firebaseapp.com",
  databaseURL: "https://eindopdrachtfep.firebaseio.com",
  projectId: "eindopdrachtfep",
  storageBucket: "eindopdrachtfep.appspot.com",
  messagingSenderId: "697311754605"
};
firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    HardwareModule
  ],
  providers: [AngularFireDatabase, HardwareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
