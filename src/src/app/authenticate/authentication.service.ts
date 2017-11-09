import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import * as CryptoJS from 'crypto-js';

//Keys that are used for encrypting and decrypting
var key = CryptoJS.enc.Utf8.parse('7061737323313233');
var iv = CryptoJS.enc.Utf8.parse('7061737323313233');

@Injectable()
export class AuthenticationService {
  constructor(public af: AngularFireDatabase) {
  }
//Searches for the username in the Database
  authenticate(username: string, password: string) {
    const useraccount = this.af.object('UserAccount/' + username.toLowerCase());

    useraccount.snapshotChanges().subscribe(action => {
//Check whether the username exists as well as checking if the password matches
      if (action.key == null) {
        this.logout();
        return (alert('This user account does not exist!'));
      } else if (password != action.payload.val().password) {
        this.logout();
        return (alert('Your credentials do not match'));
      } else {
//If everything matches, create an encrypted session token which will later on be used to authenticate the user
        var encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(username + '|+?]+|' + action.payload.val().usertype), key,
          {
            keySize: 128 / 8,
            iv: iv,
            mode: CryptoJS.mode.CBC,
            padding: CryptoJS.pad.Pkcs7
          });
        localStorage.setItem('LoggedInUser', encrypted.toString());
      }
    });

  }
//Logout the session user by removing the session item
  logout() {
    localStorage.removeItem('LoggedInUser');
    window.location.reload();
  }
//This is used for decrypting the session token, based on AES
  decrypt(toDecrypt: string) {
    var decrypted = CryptoJS.AES.decrypt(toDecrypt, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted;
  }
//Divides the session token in a user and a rolename
  splitLoggedInUser() {
    var splitted = ['none', 'none']
    if (localStorage.getItem('LoggedInUser') == null) {
    } else {
      var storage = this.decrypt(localStorage.getItem('LoggedInUser')).toString(CryptoJS.enc.Utf8);
      splitted = storage.toString().split('|+?]+|');
    }
    return splitted;
  }

  getSessionUser() {
    return this.splitLoggedInUser()[0].toString();
  }

  getSessionUserType() {
    return this.splitLoggedInUser()[1].toString();
  }
}
