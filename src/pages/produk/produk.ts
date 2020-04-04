import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CommonProvider } from '../../providers/common/common';
import { DetailProdukPage } from '../detail-produk/detail-produk';
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

  getDataProduk:any;
  dataProduk:any;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController,
     public authService: AuthServiceProvider,
     public common: CommonProvider) {
  }

  ionViewWillEnter() {
    this.common.presentLoading()
    this.authService.getData('getProduk').then((result)=>{
      this.getDataProduk = result;
      if (this.getDataProduk.dataProduk) {
        this.dataProduk = this.getDataProduk.dataProduk;
        
        this.common.closeLoading();
      }else{
        const toast = this.toastCtrl.create({
          message: "Gagal mengambil data",
          duration: 2000
        });
        this.common.closeLoading();
        toast.present()
      }
    }, (err) => {
      const toast = this.toastCtrl.create({
      message: 'Periksa koneksi anda',
      duration: 2500
    });

    this.common.closeLoading();
    toast.present();
    });
  }

  goToDetail(idProduk){
    console.log(idProduk);
    this.navCtrl.push(DetailProdukPage, {id_produk:idProduk});
  }

  ionViewWillLeave() {
    this.common.closeLoading();
  }

}
