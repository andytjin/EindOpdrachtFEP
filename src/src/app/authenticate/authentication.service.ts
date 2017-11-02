import {Injectable} from '@angular/core';
import {AngularFireDatabase} from "angularfire2/database";
import * as CryptoJS from 'crypto-js';


var key = CryptoJS.enc.Utf8.parse('7061737323313233');
var iv = CryptoJS.enc.Utf8.parse('7061737323313233');

@Injectable()
export class AuthenticationService {
  constructor(public af: AngularFireDatabase) {
  }

  authenticate(username: string, password: string) {
    const useraccount = this.af.object('UserAccount/' + username.toLowerCase());

    useraccount.snapshotChanges().subscribe(action => {
      if (action.key == null) {
        this.logout();
        return (alert('This user account does not exist!'));
      } else if (password != action.payload.val().password) {
        this.logout();
        return (alert('Your credentials do not match'));
      } else {
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

  logout() {
    localStorage.removeItem('LoggedInUser');
    window.location.reload();
  }

  decrypt(toDecrypt: string) {
    var decrypted = CryptoJS.AES.decrypt(toDecrypt, key, {
      keySize: 128 / 8,
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted;
  }

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
