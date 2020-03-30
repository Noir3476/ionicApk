import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ProdukPage } from '../produk/produk';
import { LokasiPage } from '../lokasi/lokasi';
import { MarketingPage } from '../marketing/marketing';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToProduk(){
    this.navCtrl.push(ProdukPage);
  }

  goToLokasi(){
    this.navCtrl.push(LokasiPage);
  }

  goToMarketing(){
    this.navCtrl.push(MarketingPage);
  }

}
