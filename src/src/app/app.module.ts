import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

//npm install firebase angularfire2 --save
import { AngularFireModule } from 'angularfire2';

export const firebaseConfig = {
  apiKey: 'AIzaSyCAPID67_YN3YudiWtWeDArpzgPg9OklVc',
  authDomain: 'eindopdrachtfep.firebaseapp.com',
  databaseURL: 'https://eindopdrachtfep.firebaseio.com',
  storageBucket: '',
  messagingSenderId: '697311754605'
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
