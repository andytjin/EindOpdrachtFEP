import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Exemplaar} from "../shared/Exemplaar";
import {ExemplaarStatus} from "../shared/ExemplaarStatusEnum";


@Injectable()
export class ExemplaarService {
  exemplaarList: Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.exemplaarList = af.list('/Exemplaar').snapshotChanges();
  }
//TODO - Hij kan Exemplaar objecten niet aan een array toevoegen
  getExemplarenById(id: any) {
   var exemplarenById: Array<Exemplaar>;
    firebase.database().ref().child("Exemplaar")
      .orderByChild("hardwareId")
      .equalTo(id)
      .on("child_added", function(snapshot) {
        var exem: Exemplaar = new Exemplaar(snapshot.val().hardwareId,snapshot.val().serienummer,snapshot.val().status,snapshot.val().inleverdatum);
        console.log(exem);
       //this.exemplarenById.push(exem);
      });
  }s

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
    //stopt het unieke id van de hardware object in een var

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


}

