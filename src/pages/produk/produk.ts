import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';
import { PilihanProdukPage } from '../pilihan-produk/pilihan-produk';

/**
 * Generated class for the ProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-produk',
  templateUrl: 'produk.html',
})
export class ProdukPage {

  constructor(public navCtrl:NavController){}

  goToPilihan(id_perumahan){
    this.navCtrl.push(PilihanProdukPage, {id:id_perumahan});
  }

}
