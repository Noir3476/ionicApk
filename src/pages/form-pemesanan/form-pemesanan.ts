import { Component, NgZone } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { CommonProvider } from '../../providers/common/common';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
/**
 * Generated class for the FormPemesananPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-form-pemesanan',
  templateUrl: 'form-pemesanan.html',
})
export class FormPemesananPage {

  public FormSimpanData:FormGroup;
  private captchaPassed: boolean = false;
  private captchaResponse: string;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public formBuilder:FormBuilder,
    public common:CommonProvider,
    private authService:AuthServiceProvider,
    private zone: NgZone,
    public toasCtrl:ToastController) {
      this.FormSimpanData = this.formBuilder.group({
        nama_marketing: ['', Validators.required],
        nama_pembeli: ['', Validators.required],
        identitas: ['', Validators.required],
        alamat: ['', Validators.required],
        no_hp: ['', Validators.required],
        property: ['', Validators.required],
        tipe: ['', Validators.required],
        no_blok: ['', Validators.required],
        pembayaran: ['', Validators.required],
        tanggal: ['', Validators.required],
        sbgBerikut: ['', Validators.required],
      });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FormPemesananPage');
  }

  captchaResolved(response: string): void{
    this.zone.run(()=>{
      this.captchaPassed = true;
      this.captchaResponse = response;
    });
    console.log("Ini response captcha "+ this.captchaResponse);
    
  }

  simpan(){
    
  }

}
