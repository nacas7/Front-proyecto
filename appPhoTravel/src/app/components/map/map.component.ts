/// <reference path="../../../../src/indec.d.ts" /> 
//he agregado esto último mirar bien

import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  @ViewChild('divMap') divMap!: ElementRef;

  constructor() { }

  ngOnInit(): void {
    navigator.geolocation.getCurrentPosition((position) => {
      console.log(position.coords)
    })
  }

  ngAfterViewInit() {
    this.loadMap();
  }

  loadMap() {
    const options = {
      center: new google.maps.LatLng(40, -3),
      zoom: 17,
      mapTypeId: google.maps.MapTypeId.HYBRID
    }

    //CLASE DÍA 11/11/2021 PARTE 1 2:07:38
    //https://www.youtube.com/watch?v=DQZTeZZXYBk&ab_channel=10MinutosProgramando


    new google.maps.Map(this.divMap!.nativeElement, options);
  }



}
