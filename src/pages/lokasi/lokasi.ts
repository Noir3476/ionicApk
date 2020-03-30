import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import leaflet from 'leaflet';
/**
 * Generated class for the LokasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lokasi',
  templateUrl: 'lokasi.html',
})
export class LokasiPage {
  @ViewChild('map')mapContainer: ElementRef;
  map: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.loadmap();
  }

  loadmap(){
    this.map = leaflet.map('map').setView([-7.9702611, 112.6369973], 16);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    const markPoint = leaflet.marker([-7.9702611, 112.6369973]);
    markPoint.bindPopup('<p>Elecomp Software House</p>');
    this.map.addLayer(markPoint);
  }

  ionViewWillLeave() {
    this.map.remove();
  }

}
