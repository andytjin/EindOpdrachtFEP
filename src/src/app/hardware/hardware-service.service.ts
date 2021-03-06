//<reference path="../../../node_modules/firebase/app/index.d.ts"/>
import {Injectable} from "@angular/core";
import * as firebase from "firebase/app";
import {AngularFireDatabase} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {AuthenticationService} from "../authenticate/authentication.service";
import{ Hardware} from "../shared/Hardware";


@Injectable()
export class HardwareService {
  logo: any;
  hardwareList: Observable<any[]>;

  constructor(public af: AngularFireDatabase, private as: AuthenticationService) {
    this.hardwareList = af.list('/Hardware').snapshotChanges();
  }

  getHardwareWithAmount(callback) {
    var hardwareArray: any[] = [];
    this.af.list('Hardware/').snapshotChanges().subscribe(actions => {
      actions.forEach(action => {
        var exemplaarList: Observable<any[]>;
        exemplaarList = this.af.list('Exemplaar', ref => ref.orderByChild('hardwareId').equalTo(action.key)).snapshotChanges();
        exemplaarList.subscribe(result => {
          hardwareArray.push(new Hardware(action.key,action.payload.val().naam,action.payload.val().beschrijving, result.length));
        })
      });
      callback(hardwareArray);

    });
  }

  uploadPicture(afbeelding: File, hardwareId: any) {
    let ref = firebase.storage().ref();
    let picture = ref.child('/Hardware/' + hardwareId + '/' + hardwareId);
    picture.put(afbeelding);
  }

  deletePicture(hardwareId: string) {
    let ref = firebase.storage().ref();
    let child = ref.child('Hardware/' + hardwareId + '/' + hardwareId);
    child.delete();
  }

  voegHardwareToe(naam: string, beschrijving: string, afbeelding: File) {

    var Hardware = {
      naam: naam,
      beschrijving: beschrijving
    };
    //maakt een lege hardware object aan met een unieke id
    //stopt het unieke id van de hardware object in een var

    var newPostKey = firebase.database().ref().child('Hardware').push().key;

    //voeg de inhoud toe aan de lege hardware object met de unieke id
    var updates = {};
    updates['/Hardware/' + newPostKey] = Hardware;
    //voeg de bijlage toe aan de firebase storage en refereer de afbeelding aan de hardware
    //door middel van de unieke id van de hardware
    this.uploadPicture(afbeelding, newPostKey);

    return firebase.database().ref().update(updates);
  }

  wijzigHardware(key: any, naam: string, beschrijving: string, afbeelding: File) {
    var hardware = this.af.object('Hardware/' + key);
    if (afbeelding != null) {
      this.uploadPicture(afbeelding, key);
    }
    hardware.update({
      naam: naam,
      beschrijving: beschrijving
    });

  }

  previewPictureOnChange(fileInput: any) {
    this.logo = fileInput.target.files[0];
    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.logo = e.target.result;
    };
    reader.readAsDataURL(fileInput.target.files[0]);
  }

  getHardware(key: any) {
    var hardware: Observable<any>;
    hardware = this.af.object('Hardware/' + key).valueChanges();
    return hardware;
  }

  deleteHardware(key: any) {
    const hardware = this.af.object('Hardware/' + key);
    hardware.remove();
  }

  getPicture(key: any) {
    var image: any;
    var url: any;
    let ref = firebase.storage().ref();
    ref.child('/Hardware/' + key + '/' + key).getDownloadURL().then((url) => {
      //url is our firebase path which we store as a var imageUrl
      image = url;


      //push out the listings array of data//
      return url;
    });
    return image;
  }

  getSessionUser() {
    return this.as.getSessionUser();
  }

  getSessionUserType() {
    return this.as.getSessionUserType();
  }

  getHardwareName(key:string,callback){
    var hwNaam;
    this.af.object('Hardware/' + key).snapshotChanges().subscribe(action => {
       hwNaam = action.payload.val().naam;
      callback(hwNaam);
    });
  }

}

