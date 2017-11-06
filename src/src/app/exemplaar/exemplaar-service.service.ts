import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Exemplaar} from "../shared/Exemplaar";
import {ExemplaarStatus} from "../shared/ExemplaarStatusEnum";


@Injectable()
export class ExemplaarService {
  exemplaarList: Observable<any[]>;
  statusList: ExemplaarStatus;

  constructor(public af: AngularFireDatabase) {
    this.exemplaarList = af.list('/Exemplaar').snapshotChanges();
  }
//TODO - Hij kan Exemplaar objecten niet aan een array toevoegen
  getExemplarenById(id: any) {
    return this.af.list('Exemplaar', ref => ref.orderByChild('hardwareId').equalTo(id)).snapshotChanges();
  }

  getHardwareList() {
    var hardwareList: Observable<any>;
    hardwareList = this.af.list('/Hardware').snapshotChanges();
    return hardwareList;
  }

  voegExemplaarToe(hardwareId: any, serienummer: string, status: ExemplaarStatus) {

    var Exemplaar = {
      hardwareId: hardwareId,
      serienummer: serienummer,
      status: status,
      inleverdatum:''
    }
    //maakt een lege exemplaar object aan met een unieke id
    //stopt het unieke id van de exemplaar object in een var

    var newPostKey = firebase.database().ref().child('Exemplaar').push().key;

    //voeg de inhoud toe aan de lege exemplaar object met de unieke id
    var updates = {};
    updates['/Exemplaar/' + newPostKey] = Exemplaar
    return firebase.database().ref().update(updates);
  }

  wijzigExemplaar(key: any, hardwareid: any, serienummer: string, status: string) {

    var exemplaar = this.af.object('Exemplaar/' + key);
    exemplaar.update({
      hardwareId: hardwareid,
      serienummer: serienummer,
      status: status
    });
  }

  getExemplaar(key: any) {
    var exemplaar: Observable<any>;
    exemplaar = this.af.object('Exemplaar/' + key).valueChanges();
    return exemplaar;
  }

  deleteExemplaar(key: any) {
    const exemplaar = this.af.object('Exemplaar/' + key);
    exemplaar.remove();
  }

  getExemplaarStatusList(){
    return this.statusList;
  }


}

