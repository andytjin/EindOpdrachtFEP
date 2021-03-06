import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authenticate/authentication.service";
import {HardwareService} from "../hardware/hardware-service.service";
import {Reservering} from "../shared/Reservering";
import {ReserveringEnum} from "../shared/ReserveringEnum";
import {ExemplaarService} from "../exemplaar/exemplaar-service.service";


@Injectable()
export class ReserveringService {

  beheerderReserveringList: Observable<any[]>;
  hardwareService: any;
  exemplaarService:any;

  constructor(public af: AngularFireDatabase, private as: AuthenticationService, private hs: HardwareService, private es:ExemplaarService) {
    this.beheerderReserveringList = this.af.list('Reservering/').snapshotChanges();
    this.hardwareService = hs;
    this.exemplaarService= es;
  }

  updateReservering(key: string, status: string,) {
    var reservering = this.af.object('Reservering/' + key);
    if (status == ReserveringEnum.OPGEHAALD) {
      reservering.update({
        status: status,
        terugbrengdatum: this.terugBrengDatum()
      });
    } else {
      reservering.update({
        status: status
      })
    };
  }

  getStudentReserveringList(studentnaam: string, callback) {
    var reserveringArray: any[] = [];
    var reserveringList: Observable<any[]>;
    reserveringList = this.af.list('Reservering/', ref => ref.orderByChild('studentNaam').equalTo(studentnaam)).snapshotChanges();
    reserveringList.subscribe(actions => {
      actions.forEach(action => {
        reserveringArray.push(
          new Reservering(action.key,
            action.payload.val().studentNaam,
            action.payload.val().hardwareId,
            action.payload.val().hardwareNaam,
            action.payload.val().reserveringsDatum,
            action.payload.val().status,
            action.payload.val().terugbrengdatum,
            action.payload.val().aantal));
      })
    });
    callback(reserveringArray);
  }

  annuleerReservering(key: any) {
    var reservering = this.af.object('Reservering/' + key);
    reservering.update({
      status: ReserveringEnum.GEANNULEERD
    });
  }


  getSessionUser() {
    return this.as.getSessionUser();
  }

  getSessionUserType() {
    return this.as.getSessionUserType();
  }

  terugBrengDatum() {
    var currentDate = new Date();
    var day = currentDate.getDate() + 7;
    var month = currentDate.getMonth()+ 1;
    var year = currentDate.getFullYear();
    return ("" + (day + "/" + month + "/" + year));
  }

  huidigeDatum() {
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth() + 1;
    var year = currentDate.getFullYear();
    return ("" + (day + "/" + month + "/" + year));
  }

  terugBrengDatumIsOverschreden(terugBrengDatumString: string) {
    const today = new Date();

    const parts: string[] = terugBrengDatumString.split('/');
    const terugBrengDatum = new Date(parseInt(parts[2], 10), parseInt(parts[1], 10) - 1, parseInt(parts[0], 10));

    return terugBrengDatum <= today;
  }

  requestReservering(studentNaam: string, hardwareId: string, hardwareNaam: string, aantal: string) {

    var reservering = {
      studentNaam: studentNaam,
      hardwareId: hardwareId,
      hardwareNaam: hardwareNaam,
      reserveringsDatum: this.huidigeDatum(),
      status: ReserveringEnum.IN_BEHANDELING,
      terugbrengdatum: ' ',
      aantal: aantal
    };
    var newPostKey = firebase.database().ref().child('Reservering').push().key;

    var updates = {};
    updates['/Reservering/' + newPostKey] = reservering;

    return firebase.database().ref().update(updates);
  }

}
