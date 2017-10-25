import { Component, OnInit } from '@angular/core';
import {HardwareService} from '../hardware-service.service'

@Component({
  selector: 'hardware-toevoegen',
  templateUrl: './hardware-toevoegen.component.html',
  styleUrls: ['./hardware-toevoegen.component.css']
})
export class HardwareToevoegenComponent implements OnInit {

  hardwareService:any;
  constructor(public hardwareservice:HardwareService) {
    this.hardwareService = hardwareservice;
  }


  ngOnInit() {
  }

}
