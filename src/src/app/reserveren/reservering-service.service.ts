import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authenticate/authentication.service";
import {HardwareService} from "../hardware/hardware-service.service";
import {Reservering} from "../shared/Reservering";
import {ReserveringEnum} from "../shared/ReserveringEnum";


@Injectable()
export class ReserveringService {

  beheerderReserveringList: Observable<any[]>;
  hardwareService: any;

  constructor(public af: AngularFireDatabase, private as: AuthenticationService, private hs: HardwareService) {
    this.beheerderReserveringList = this.af.list('Reservering/').snapshotChanges();
    this.hardwareService = hs;
  }

  getStudentReserveringList(studentnaam: string, callback) {
    var reserveringArray: any[] = [];
    var reserveringList: Observable<any[]>;
    reserveringList = this.af.list('Reservering/', ref => ref.orderByChild('studentNaam').equalTo(studentnaam)).snapshotChanges();
    reserveringList.subscribe(actions => {
      actions.forEach(action => {
        console.log(action.payload.val().status);
        reserveringArray.push(
          new Reservering(action.key,
            action.payload.val().studentNaam,
            action.payload.val().hardwareId,
            action.payload.val().datumAangevraagd,
            action.payload.val().status,
            action.payload.val().terugbrengdatum));
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


}
