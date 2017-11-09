import {Component, OnInit} from '@angular/core';
import {ReserveringService} from "../../reserveren/reservering-service.service";
import {ActivatedRoute, Router} from '@angular/router';
import {Observable} from "rxjs/Observable";
import {ReserveringEnum} from "../../shared/ReserveringEnum";

@Component({
  selector: 'app-reservering-overzicht',
  templateUrl: './reservering-overzicht.component.html',
  styleUrls: ['./reservering-overzicht.component.css']
})
export class ReserveringOverzichtComponent implements OnInit {
  reserveringService: any;
  reserveringMap: any[];
  allReserveringen: Observable<any[]>;

  constructor(private route: Router, private ReserveringService: ReserveringService) {
    this.reserveringService = ReserveringService;
  }

  ngOnInit() {
    this.reserveringService.getStudentReserveringList(this.reserveringService.getSessionUser(), reservering => {
      this.reserveringMap = reservering;
      this.allReserveringen = this.reserveringService.beheerderReserveringList;
    });
  }

  annuleerReservering(id: string) {
    this.reserveringService.annuleerReservering(id);
    location.reload();
    alert('Reservering succesvol geannuleerd!');
  }

  updateToNextStatus(key:string, status:string){
    var toUpdate: ReserveringEnum;
    switch(status) {
      case ReserveringEnum.IN_BEHANDELING:
        toUpdate = ReserveringEnum.STAAT_KLAAR
        break;
      case ReserveringEnum.STAAT_KLAAR:
        toUpdate = ReserveringEnum.OPGEHAALD
        break;
      case ReserveringEnum.OPGEHAALD:
        toUpdate = ReserveringEnum.AFGEROND
        break;
      default:
    }
   this.reserveringService.updateReservering(key, toUpdate);
  }
}
