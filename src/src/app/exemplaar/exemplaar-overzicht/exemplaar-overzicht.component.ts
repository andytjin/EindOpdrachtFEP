import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ExemplaarService} from "../exemplaar-service.service";

@Component({
  selector: 'app-exemplaar-overzicht',
  templateUrl: './exemplaar-overzicht.component.html',
  styleUrls: ['./exemplaar-overzicht.component.css']
})
export class ExemplaarOverzichtComponent implements OnInit {

  exemplaarService: any;

  constructor(private route: Router, public exemplaarservice:ExemplaarService) {
    this.exemplaarService = exemplaarservice;
  }

  ngOnInit() {
  }

  deleteHardware(id: any) {
    this.exemplaarservice.deleteExemplaar(id);
    return alert("Exemplaar succesfully deleted");
  }

}
