import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ExemplaarService} from "../exemplaar-service.service";

@Component({
  selector: 'app-exemplaar-overzicht',
  templateUrl: './exemplaar-overzicht.component.html',
  styleUrls: ['./exemplaar-overzicht.component.css']
})
export class ExemplaarOverzichtComponent implements OnInit {
  id: string;
  private sub: any;
  exemplaarService: any;

  constructor(private router: Router, public exemplaarservice: ExemplaarService, private route: ActivatedRoute) {
    this.exemplaarService = exemplaarservice;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      })
  }

  deleteHardware(id: any) {
    this.exemplaarservice.deleteExemplaar(id);
    return alert("Exemplaar succesfully deleted");
  }

}
