import {Component, OnInit} from '@angular/core';
import {HardwareService} from '../hardware-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hardware} from '../../shared/Hardware';


@Component({
  selector: 'app-hardware-overzicht',
  templateUrl: './hardware-overzicht.component.html',
  styleUrls: ['./hardware-overzicht.component.css']
})
export class HardwareOverzichtComponent implements OnInit {
  hardwareService: any;
  studentMap: any[];

  constructor(private route: Router, public hardwareservice: HardwareService) {
    this.hardwareService = hardwareservice;
  }

  ngOnInit() {
    this.hardwareService.getHardwareWithAmount((hardware) => {
     this.studentMap = hardware;
  });

  }

  deleteHardware(id: any) {
    this.hardwareService.deleteHardware(id);
    this.hardwareService.deletePicture(id);
    return alert("Hardware succesfully deleted");
  }


}
