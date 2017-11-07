import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HardwareService} from '../../hardware/hardware-service.service';
import {Observable} from "rxjs/Observable";
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-reservering-aanmelden',
  templateUrl: './reservering-aanmelden.component.html',
  styleUrls: ['./reservering-aanmelden.component.css']
})
export class ReserveringAanmeldenComponent implements OnInit {
  image: any;
  id: string;
  aantalInVoorraad:string;
  private sub: any;
  hardwareService: any;
  hardwareInformation: Observable<any>;

  constructor(private route: ActivatedRoute, public hardwareservice: HardwareService, private router: Router) {
    this.hardwareService = hardwareservice;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id'];
      this.aantalInVoorraad = params['aantal'];
      // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.hardwareInformation = this.hardwareService.getHardware(this.id);
      this.getPicture(this.id);
    });
  }
  getPicture(key: any) {
    let ref = firebase.storage().ref();
    ref.child('/Hardware/' + key + '/' + key).getDownloadURL().then((url) => {
        //url is our firebase path which we store as a var imageUrl
        this.image = url;


        //push out the listings array of data//
        // this.listingss.push(listings);
      }
    )
  }
  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{outlets: {popup: null}}]);
  }
  reserveerHardware(aantal: number){
    if(aantal <= 0 || aantal > parseInt(this.aantalInVoorraad)){
      alert('Het aantal moet tussen 1 en ' + this.aantalInVoorraad);
    }else{

    }

  }
}
