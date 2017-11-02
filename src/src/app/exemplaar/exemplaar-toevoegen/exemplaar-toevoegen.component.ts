import { Component, OnInit,  HostBinding } from '@angular/core';
import {ExemplaarService} from '../exemplaar-service.service';
import { Router } from '@angular/router';
import { slideInDownAnimation }   from '../../animations';

@Component({
  selector: 'app-exemplaar-toevoegen',
  templateUrl: './exemplaar-toevoegen.component.html',
  styleUrls: ['./exemplaar-toevoegen.component.css'],
  animations: [ slideInDownAnimation ]
})
export class ExemplaarToevoegenComponent implements OnInit {


  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  exemplaarService:any;
  details: string;
  sending = false;

  constructor(private router: Router,public exemplaarservice:ExemplaarService) {
    this.exemplaarService = exemplaarservice;
  }
  send() {
    this.sending = true;
    this.details = 'Sending Message...';

    setTimeout(() => {
      this.sending = false;
      this.closePopup();
    }, 1000);
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{ outlets: { popup: null }}]);
  }

  saveExemplaar(hardwareid:any,serienummer:string) {
    this.exemplaarService.voegExemplaarToe(hardwareid,serienummer);
    this.closePopup();
  }

  getHardwareList(){
    return this.exemplaarService.getHardwareList();
  }

  ngOnInit() {
  }

}
