import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { NavController } from '@ionic/angular';
import { GruposPageModule } from '../grupos/grupos.module';

declare var google: any;

@Component({
  selector: 'app-ubicacion',
  templateUrl: './ubicacion.page.html',
  styleUrls: ['./ubicacion.page.scss'],
})
export class UbicacionPage implements OnInit {

  @ViewChild('map') mapRef: ElementRef;
  
  constructor(public navCtrl: NavController) { }

  ionViewDidLoad(){
    this.showMap();
  }

  showMap(){
    const location = new google.maps.LatLng(51.507351, -0.1277758);

    //map options
    const options = {
      center: location,
      zoom: 10
    }

    const map = new google.maps.Map(this.mapRef.nativeElement, options);

    this.addMarker(location, map);
  }

  addMarker(position, map){
    return new google.maps.Marker({
       position,
       map
    });
  }

  ngOnInit() {
  }

}
