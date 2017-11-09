import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Exemplaar} from "../shared/Exemplaar";
import {ExemplaarStatus} from "../shared/ExemplaarStatusEnum";
import {AuthenticationService} from "../authenticate/authentication.service";


@Injectable()
export class ExemplaarService {
  exemplaarList: Observable<any[]>;


  constructor(public af: AngularFireDatabase, public as: AuthenticationService) {
    this.exemplaarList = af.list('/Exemplaar').snapshotChanges();
  }
//Retrieves an exemplaar by ID
  getExemplarenById(id: any) {
    return this.af.list('Exemplaar', ref => ref.orderByChild('hardwareId').equalTo(id)).snapshotChanges();
  }
//Retrieves all hardware types (Medewerker only)
  getHardwareList() {
    var hardwareList: Observable<any>;
    hardwareList = this.af.list('/Hardware').snapshotChanges();
    return hardwareList;
  }
//Makes sure an exemplaar is added to the database with the correct hardwareType
  voegExemplaarToe(hardwareId: any, serienummer: string, status: ExemplaarStatus) {

    var Exemplaar = {
      hardwareId: hardwareId,
      serienummer: serienummer,
      status: status,
      inleverdatum:''
    }

//Creates an empty exemplaar object with a unique ID
//Puts the unique ID from the exemplaar object in a var

    var newPostKey = firebase.database().ref().child('Exemplaar').push().key;

//Update the contents from the Exemplaar in the database
    var updates = {};
    updates['/Exemplaar/' + newPostKey] = Exemplaar
    return firebase.database().ref().update(updates);
  }

//Makes it possible to change an exemplaar by updating the hardwareId, seriennummer and status
  wijzigExemplaar(key: any, hardwareid: any, serienummer: string, status: string) {
    var exemplaar = this.af.object('Exemplaar/' + key);
    exemplaar.update({
      hardwareId: hardwareid,
      serienummer: serienummer,
      status: status
    });
  }
  wijzigExemplaarStatus(key: any, status: string) {
    var exemplaar = this.af.object('Exemplaar/' + key);
    exemplaar.update({
      status: status
    });
  }


//Retrieves an exemplaar by ID, waits for a callback that returns Exemplaar object once fillet with the action attributes.
  getExemplaar(key: any, callback) {
    let hardwareId;
    let serienummer;
    let status;
    let inleverdatum;
    this.af.object('Exemplaar/' + key).snapshotChanges().subscribe(action => {
      hardwareId = action.payload.val().hardwareId;
      serienummer = action.payload.val().serienummer;
      status = action.payload.val().status;
      inleverdatum = action.payload.val().inleverdatum;

      var exemplaar = new Exemplaar(key ,hardwareId, serienummer, status, inleverdatum );
      callback(exemplaar);
    });
  }

  deleteExemplaar(key: any) {
    const exemplaar = this.af.object('Exemplaar/' + key);
    exemplaar.remove();
  }

  getExemplaarStatusList(){
    const keyValue = [];
    const keys = Object.keys(ExemplaarStatus).filter((value, index) => {
      return !(index % 2);
    });

    for (const k of keys) {
      keyValue.push({key: k, value: ExemplaarStatus[k]});
    }

    return keyValue;
  }

  getSessionUser() {
    return this.as.getSessionUser();
  }

  getSessionUserType() {
    return this.as.getSessionUserType();
  }
}

