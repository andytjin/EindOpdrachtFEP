import { Component, OnInit } from '@angular/core';
import {HardwareService} from '../hardware-service.service';
import {ActivatedRoute, Router} from '@angular/router';
@Component({
  selector: 'app-hardware-overzicht',
  templateUrl: './hardware-overzicht.component.html',
  styleUrls: ['./hardware-overzicht.component.css']
})
export class HardwareOverzichtComponent implements OnInit {

  hardwareService:any;
  constructor(private route: Router,public hardwareservice:HardwareService) {
    this.hardwareService = hardwareservice;
  }



  ngOnInit() {

  }

}
