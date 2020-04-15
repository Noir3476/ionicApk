import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { ProdukPage } from '../produk/produk';
import { LokasiPage } from '../lokasi/lokasi';
import { MarketingPage } from '../marketing/marketing';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CommonProvider } from '../../providers/common/common';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  dataSlider: any;
  getDataSlider: any;
  dataParse: any;
  slider:any = [];

  constructor(
    public navCtrl: NavController, 
    public toastCtrl: ToastController,
    public common: CommonProvider,
    private authService: AuthServiceProvider) {
      this.slider;
  }

  ionViewWillEnter(){
    this.common.presentLoading();
    this.authService.getData('getDataSlider').then((result)=>{
      this.getDataSlider = result;
      if(this.getDataSlider.dataSlider){
        
        this.dataSlider = this.getDataSlider.dataSlider;
        this.dataParse = JSON.parse(JSON.stringify(this.dataSlider));
        this.common.closeLoading();
      }else{
        const toast = this.toastCtrl.create({
          message: "Gagal Mengambil Data",
          duration: 2500
        });
        this.common.closeLoading();
        toast.present();
      }
    }, (err)=>{
      const toast = this.toastCtrl.create({
        message: "Terjadi kesalahan periksa koneksi anda",
        duration: 2500
      });

      this.common.closeLoading();
      toast.present();
    });
  }

  ionImgDilLoad(){
    this.common.closeLoading();
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

  goToLogin(){
    this.navCtrl.push(LoginPage);
  }

  ionViewWillLeave() {
    this.common.closeLoading();
  }

}
