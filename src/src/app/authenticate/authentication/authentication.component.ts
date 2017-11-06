import {Component, OnInit} from '@angular/core';
import {AuthenticationService} from '../authentication.service'

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  constructor(private as: AuthenticationService){}

  ngOnInit() {
  }
  authenticate(username: string, password: string) {
    this.as.authenticate(username, password);
  }

}
