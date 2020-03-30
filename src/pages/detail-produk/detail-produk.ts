import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CommonProvider } from '../../providers/common/common';

/**
 * Generated class for the DetailProdukPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detail-produk',
  templateUrl: 'detail-produk.html',
})
export class DetailProdukPage {

  getDataProduk:any;
  getIdProduk:any;
  dataProduk:any;
  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController,
     public authService: AuthServiceProvider,
     public common: CommonProvider) {

      
  }

  ionViewWillEnter() {
    console.log(this.navParams.get('id_produk'));
    
    let id = this.navParams.get('id_produk');
    this.getIdProduk = {id_produk:id};
    console.log(this.getIdProduk);
    this.common.presentLoading()
    this.authService.postData('getDataProduk', this.getIdProduk).then((result)=>{
      this.getDataProduk = result;
      console.log(this.getDataProduk);
      if (this.getDataProduk.detailProduk) {
        this.dataProduk = this.getDataProduk.detailProduk;
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
      message: 'Gagal koneksi ke server.'+err,
      duration: 210000
    });

    this.common.closeLoading();
    toast.present();
    });
  }

}
