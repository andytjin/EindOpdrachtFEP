import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from "@angular/router";
import {ExemplaarService} from "../exemplaar-service.service";

@Component({
  selector: 'app-exemplaar-overzicht',
  templateUrl: './exemplaar-overzicht.component.html',
  styleUrls: ['./exemplaar-overzicht.component.css']
})
export class ExemplaarOverzichtComponent implements OnInit {
  hardwareId: string;
  private sub: any;
  exemplaarService: any;
  exemplaarList:any;

  constructor(private router: Router, public exemplaarservice: ExemplaarService, private route: ActivatedRoute) {
    this.exemplaarService = exemplaarservice;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.hardwareId = params['id'];
      })
    this.exemplaarList = this.exemplaarservice.getExemplarenById(this.hardwareId);
  }

  deleteHardware(id: any) {
    this.exemplaarservice.deleteExemplaar(id);
    return alert("Exemplaar succesfully deleted");
  }

}
