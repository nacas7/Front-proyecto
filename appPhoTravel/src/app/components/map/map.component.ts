
import { Component, OnInit, ViewChild, ElementRef, NgZone } from '@angular/core';
import { AgmInfoWindow, MapsAPILoader, MouseEvent } from '@agm/core';
import { Photographer } from '../interface/interface.photographer';
import { PerfileService } from 'src/app/perfile.service';
import { AllPhotographersService } from 'src/app/all-photographers.service';


@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {

  lat!: number;
  lng!: number;
  zoom!: number;
  mapTypeId!: string;
  address!: string;
  photographers: Photographer[] = [];
  private geoCoder: any;
  previous!: AgmInfoWindow;

  @ViewChild('search')
  private searchElementRef!: ElementRef;



  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    private perfileServices: PerfileService


  ) {

  }

  async ngOnInit() {


    this.photographers = await this.perfileServices.getAll();

    this.photographers.map(async photographer => {
      let address = photographer.ubication
      let response = await this.perfileServices.getLocation(address)
      photographer.lat = response.results[0].geometry.location.lat
      photographer.long = response.results[0].geometry.location.lng
    })



    this.mapsAPILoader.load().then(() => {
      this.setCurrentLocation();
      this.geoCoder = new google.maps.Geocoder;

      let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
      autocomplete.addListener("place_changed", () => {
        this.ngZone.run(() => {

          let place: google.maps.places.PlaceResult = autocomplete.getPlace();


          if (place.geometry === undefined || place.geometry === null) {
            return;
          }


          this.lat = place.geometry.location.lat();
          this.lng = place.geometry.location.lng();
          this.zoom = 12;
          this.getAddress(this.lat, this.lng);
        });
      });
    });
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.lat = position.coords.latitude;
        this.lng = position.coords.longitude;
        this.zoom = 16;

      })

    }
  }
  markerDragEnd($event: MouseEvent) {
    console.log($event);
    this.lat = $event.coords.lat;
    this.lng = $event.coords.lng;

  }
  getAddress(latitude: number, longitude: number) {
    this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
      console.log(results);
      console.log(status);
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  };

  clickedMarker(infoWindow: AgmInfoWindow) {
    if (this.previous) {
      this.previous.close();
    }
    this.previous = infoWindow;
  }




}
