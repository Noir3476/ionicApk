import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { CommonProvider } from '../../providers/common/common';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { FormPemesananPage } from '../form-pemesanan/form-pemesanan';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  FormSimpanData: FormGroup;
  dataLogin:any;
  dataParse:any;
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public toastCtrl: ToastController,
    public common: CommonProvider,
    private authService: AuthServiceProvider,
    public formBuilder: FormBuilder) {
      this.FormSimpanData = this.formBuilder.group({
        username: ['', Validators.required],
        password: ['', Validators.required],
      })
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  login(){
    // this.common.presentLoading();
    // if(this.FormSimpanData.value.username == "admin" && this.FormSimpanData.value.password=="admin"){
    //   this.navCtrl.push(FormPemesananPage);
    //   this.common.closeLoading();
    // }
    // else{
    //   const toast = this.toastCtrl.create({
    //     message: "Username atau password salah",
    //     duration: 2000
    //   });
    //   toast.present();
    //   this.common.closeLoading();
    // }
    console.log(this.FormSimpanData.value);
    this.common.presentLoading();
    this.authService.postData('login', this.FormSimpanData.value).then((result)=>{
      this.dataLogin = result;
      console.log(this.dataLogin);
      this.dataParse = JSON.parse(JSON.stringify(this.dataLogin));

      if (this.dataParse[0]['message'] === "success") {
        this.common.closeLoading();
        this.navCtrl.push(FormPemesananPage, {user: this.dataParse[0]['username']});
      }else{
        this.common.closeLoading();
        const toast = this.toastCtrl.create({
          message: "Username atau Password anda salah",
          duration: 2000
        });

        toast.present();
      }
    }, (err) => {
        const toast = this.toastCtrl.create({
        message: 'Periksa Koneksi Anda '+err,
        duration: 2500
      });

      this.common.closeLoading();
      toast.present();
    });
  }

  

}
