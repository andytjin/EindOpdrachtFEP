import {Component, OnInit, HostBinding} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {HardwareService} from '../hardware-service.service';
import {Observable} from "rxjs/Observable";
import {slideInDownAnimation}   from '../../animations';
import * as firebase from 'firebase/app';

@Component({
  selector: 'app-hardware-wijzigen',
  templateUrl: './hardware-wijzigen.component.html',
  styleUrls: ['./hardware-wijzigen.component.css'],
  animations: [slideInDownAnimation]
})
export class HardwareWijzigenComponent implements OnInit {
  @HostBinding('@routeAnimation') routeAnimation = true;
  @HostBinding('style.display') display = 'block';
  @HostBinding('style.position') position = 'absolute';
  image: any;
  id: string;
  private sub: any;
  hardwareService: any;
  hardwareToEdit: Observable<any>;

  constructor(private route: ActivatedRoute, public hardwareservice: HardwareService, private router: Router) {
    this.hardwareService = hardwareservice;
  }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.id = params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.
      this.hardwareToEdit = this.hardwareService.getHardware(this.id);
      this.getPicture(this.id);
       });
  }

  cancel() {
    this.closePopup();
  }

  closePopup() {
    // Providing a `null` value to the named outlet
    // clears the contents of the named outlet
    this.router.navigate([{outlets: {popup: null}}]);
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
  saveHardware(id: string, naam: string, beschrijving: string, afbeelding: File) {
    this.hardwareService.wijzigHardware(id, naam, beschrijving, afbeelding);
    this.closePopup();
  }
}
