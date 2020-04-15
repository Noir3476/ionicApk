import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import leaflet from 'leaflet';
import { CommonProvider } from '../../providers/common/common';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';

/**
 * Generated class for the DetailLokasiPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-lokasi',
  templateUrl: 'detail-lokasi.html',
})
export class DetailLokasiPage {

  @ViewChild('map')mapContainer: ElementRef;
  map: any;
  dataLokasi: any;
  getDataLokasi: any;
  dataParse: any;
  lat: String;
  long: String;
  lokasi: String;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public common: CommonProvider,
    private authService: AuthServiceProvider,
    public toastCtrl: ToastController ) {
  }

  ionViewWillEnter() {
    let id = this.navParams.get('id');
    this.common.presentLoading();
    this.authService.getDataParams('getDataLokasi', id).then((result)=>{
      this.getDataLokasi = result;
      if (this.getDataLokasi.dataLokasi) {
        this.dataLokasi = this.getDataLokasi.dataLokasi;
        this.dataParse = JSON.parse(JSON.stringify(this.dataLokasi));
        this.lat = this.dataParse[0]['lat'];
        this.long = this.dataParse[0]['long'];
        this.lokasi = this.dataParse[0]['nama_perumahan']
        this.loadmap(this.lat, this.long, this.lokasi);
        this.common.closeLoading();
      }else{
        const toast = this.toastCtrl.create({
          message: "Gagal mengambil data",
          duration: 2000
        });
        this.common.closeLoading();
        toast.present();
      }
    }, (err)=>{
      const toast = this.toastCtrl.create({
        message: "Periksa koneksi anda",
        duration: 2000
      });
      this.common.closeLoading();
      toast.present();
    })
  }

  loadmap(lat, long, lokasi){
    // console.log(this.dataParse[0]['lat']+ this.dataParse[0]['long']);
    
    this.map = leaflet.map('map').setView([lat, long], 16);
    leaflet.tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attributions: 'www.tphangout.com',
      maxZoom: 18
    }).addTo(this.map);
    const markPoint = leaflet.marker([this.lat, this.long]);
    markPoint.bindPopup('<p>'+lokasi+'</p>');
    this.map.addLayer(markPoint);
  }  

  ionViewWillLeave() {
    this.map.remove();
  }

}
