import { Component, OnInit, HostBinding } from '@angular/core';
import {ExemplaarService} from '../exemplaar-service.service';
import {Router, ActivatedRoute} from '@angular/router';
import {slideInDownAnimation}   from '../../animations';
import {ExemplaarStatus} from '../../shared/ExemplaarStatusEnum';
import {Observable} from "rxjs/Observable";
@Component({
  selector: 'app-exemplaar-wijzigen',
  templateUrl: './exemplaar-wijzigen.component.html',
  styleUrls: ['./exemplaar-wijzigen.component.css'],
  animations: [slideInDownAnimation]
})
export class ExemplaarWijzigenComponent implements OnInit {


  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  exemplaarService: any;
  details: string;
  sending = false;
  statusList: any;
  sub: any;
  id: any;
  exemplaar: Observable<any>;

  constructor(private router: Router, public exemplaarservice: ExemplaarService, private route: ActivatedRoute,) {
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
    this.router.navigate([{outlets: {popup: null}}]);
  }

  saveExemplaar(hardwareid: any, serienummer: string,status:any) {
    this.exemplaarService.wijzigExemplaar(hardwareid, serienummer,status);
    this.closePopup();
  }



  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      console.log(this.id);
      this.exemplaar = this.exemplaarService.getExemplaar(this.id);
      this.statusList = this.exemplaarService.getExemplaarStatusList();
    })
  }

}
