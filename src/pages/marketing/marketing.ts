import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController, Img } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CommonProvider } from '../../providers/common/common';
/**
 * Generated class for the MarketingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-marketing',
  templateUrl: 'marketing.html',
})
export class MarketingPage {

  getDataMarketing: any;
  dataMarketing: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public authService: AuthServiceProvider,
    public common: CommonProvider,
    public toastCtrl: ToastController){
  }

  ionViewWillEnter() {
    this.common.presentLoading()
    this.authService.getData('getDataMarketing').then((result)=>{
      this.getDataMarketing = result;
      if (this.getDataMarketing.dataMarketing) {
        this.dataMarketing = this.getDataMarketing.dataMarketing;        
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
}
