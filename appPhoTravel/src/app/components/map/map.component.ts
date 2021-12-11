/// 
// <reference path="../../../node_modules/@types/googlemaps/index.d.ts" />

import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat: number;
  lng: number;
  zoom: number;
  mapTypeId: any;



  constructor() {
    this.lat = 40;
    this.lng = -3;
    this.zoom = 16;
    this.mapTypeId = 'hybrid';
  }

  ngOnInit(): void {

  }



}
