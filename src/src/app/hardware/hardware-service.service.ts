import { Injectable } from '@angular/core';
import * as firebase from 'firebase/app';
import {AngularFireDatabase } from "angularfire2/database";
import {Observable} from "rxjs/Observable";



@Injectable()
export class HardwareService {
  logo:any;
  hardwareKeyList:Observable<any[]>;
  hardwareList:Observable<any[]>;

  constructor(public af: AngularFireDatabase) {
    this.hardwareKeyList = af.list('/Hardware').snapshotChanges();
    this.hardwareList = af.list('/Hardware').valueChanges();
  }


  uploadPicture(afbeelding: File, hardwareId:any){
    let ref = firebase.storage().ref();
    let picture = ref.child('/Hardware/' +hardwareId +'/' + afbeelding.name);
    picture.put(afbeelding);
  }


  deletePicture(filename: String,hardwareId:string) {
    let ref = firebase.storage().ref();
    let child = ref.child('Hardware/'+ hardwareId+'/' + filename);
    child.delete();
  }

  voegHardwareToe(naam: string, beschrijving: string, afbeelding: File){

     var Hardware={
      naam: naam,
      beschrijving: beschrijving
    }
    //maakt een lege hardware object aan met een unieke id
    //stopt het unieke id van de hardware object in een var

    var newPostKey = firebase.database().ref().child('Hardware').push().key;

    //voeg de inhoud toe aan de lege hardware object met de unieke id
    var updates = {};
    updates['/Hardware/' + newPostKey] = Hardware
    //voeg de bijlage toe aan de firebase storage en refereer de afbeelding aan de hardware
    //door middel van de unieke id van de hardware
    this.uploadPicture(afbeelding,newPostKey);

    return firebase.database().ref().update(updates);
  }


  previewPictureOnChange(fileInput: any){
    this.logo = fileInput.target.files[0];

    let reader = new FileReader();

    reader.onload = (e: any) => {
      this.logo = e.target.result;
    }

    reader.readAsDataURL(fileInput.target.files[0]);
  }

}

