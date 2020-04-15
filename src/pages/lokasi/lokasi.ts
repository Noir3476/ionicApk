import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { DetailLokasiPage } from '../detail-lokasi/detail-lokasi';
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
  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  goToDetail(id_perumahan){
    this.navCtrl.push(DetailLokasiPage, {id:id_perumahan});
  }
}
