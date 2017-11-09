import {Component, OnInit} from '@angular/core';
import {HardwareService} from '../hardware-service.service';
import {ActivatedRoute, Router} from '@angular/router';
import {Hardware} from '../../shared/Hardware';
import {Observable} from "rxjs/Observable";

import {NgbModal, ModalDismissReasons, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-hardware-overzicht',
  templateUrl: './hardware-overzicht.component.html',
  styleUrls: ['./hardware-overzicht.component.css']
})
export class HardwareOverzichtComponent implements OnInit {
  hardwareService: any;
  studentMap: any[];
  closeResult: string;
  hardwareToevoegenModal: NgbModalRef;

  constructor(private route: Router, public hardwareservice: HardwareService, private modalService: NgbModal) {
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
  };

  openNieuweHardwareModal(content) {
      this.hardwareToevoegenModal = this.modalService.open(content);
  }

  closeNieuweHardwareModal() {
    this.hardwareToevoegenModal.close();
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

}
