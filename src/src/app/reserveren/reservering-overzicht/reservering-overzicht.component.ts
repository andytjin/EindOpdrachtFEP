import {Component, OnInit} from '@angular/core';
import {ReserveringService} from "../../reserveren/reservering-service.service";
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-reservering-overzicht',
  templateUrl: './reservering-overzicht.component.html',
  styleUrls: ['./reservering-overzicht.component.css']
})
export class ReserveringOverzichtComponent implements OnInit {
  reserveringService: any;
  reserveringMap: any[]

  constructor(private route: Router, private ReserveringService: ReserveringService) {
    this.reserveringService = ReserveringService;
  }

  ngOnInit() {
    this.reserveringService.getStudentReserveringList(this.reserveringService.getSessionUser(), reservering => {
      this.reserveringMap = reservering;
      console.log(this.reserveringMap);
    });
  }

  annuleerReservering(id: string) {
    this.reserveringService.annuleerReservering(id);
    alert('Reservering succesvol geannuleerd!');
  }
}
