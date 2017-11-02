import { Component } from '@angular/core';
import {AuthenticationService} from "../app/authenticate/authentication.service";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private as:AuthenticationService){

  }
  logout(){
    this.as.logout();
  }
}
