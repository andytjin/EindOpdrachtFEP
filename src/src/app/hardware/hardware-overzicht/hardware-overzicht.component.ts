import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hardware-overzicht',
  templateUrl: './hardware-overzicht.component.html',
  styleUrls: ['./hardware-overzicht.component.css']
})
export class HardwareOverzichtComponent implements OnInit {

  hardwareService:any;
  constructor(public hardwareservice:HardwareService) {
    this.hardwareService = hardwareservice;
  }

  ngOnInit() {
  }

}
