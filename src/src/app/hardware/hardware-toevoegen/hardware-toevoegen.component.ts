import { Component, OnInit,  HostBinding } from '@angular/core';
import {HardwareService} from '../hardware-service.service';
import { Router } from '@angular/router';
import { slideInDownAnimation }   from '../../animations';
@Component({
  selector: 'hardware-toevoegen',
  templateUrl: './hardware-toevoegen.component.html',
  styleUrls: [ './hardware-toevoegen.component.css' ],
  animations: [ slideInDownAnimation ]
})
export class HardwareToevoegenComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';
  hardwareService:any;
  details: string;
  sending = false;

  constructor(private router: Router,public hardwareservice:HardwareService) {
    this.hardwareService = hardwareservice;
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

  saveHardware(naam: string, beschrijving: string, afbeelding: File) {
    this.hardwareService.voegHardwareToe(naam, beschrijving, afbeelding);
    this.closePopup();
  }

  ngOnInit() {
  }

}
