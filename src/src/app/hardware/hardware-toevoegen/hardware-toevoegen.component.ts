import { Component, OnInit,  HostBinding } from '@angular/core';
import {HardwareService} from '../hardware-service.service';
import { Router } from '@angular/router';
import {HardwareOverzichtComponent} from "../hardware-overzicht/hardware-overzicht.component";

@Component({
  selector: 'hardware-toevoegen',
  templateUrl: './hardware-toevoegen.component.html',
  styleUrls: [ './hardware-toevoegen.component.css' ]
})
export class HardwareToevoegenComponent implements OnInit {
  hardwareService:any;
  details: string;
  sending = false;
  hardwareOverzicht: HardwareOverzichtComponent;

  constructor(private router: Router,public hardwareservice:HardwareService, public hardwareO:HardwareOverzichtComponent) {
    this.hardwareService = hardwareservice;
    this.hardwareOverzicht = hardwareO;
  }

  closeNieuweHardwareModal() {
    this.hardwareOverzicht.closeNieuweHardwareModal();
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
    this.closeNieuweHardwareModal();
  }

  ngOnInit() {
  }

}
