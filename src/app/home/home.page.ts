import { Component } from '@angular/core';
import { GoogleMaps, GoogleMap, GoogleMapsEvent } from "@ionic-native/google-maps";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public map: GoogleMap;

  constructor() {}

  public createMap(){
    this.map = GoogleMaps.create('map', {});
    this.map.one(GoogleMapsEvent.MAP_READY).then(() => {

    });
  }

}
