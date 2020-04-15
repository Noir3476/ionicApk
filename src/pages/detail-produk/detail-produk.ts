import { Component } from '@angular/core';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from "@ionic-native/file";
import { IonicPage, NavController, NavParams, ToastController, Platform } from 'ionic-angular';
import { AuthServiceProvider } from '../../providers/auth-service/auth-service';
import { CommonProvider } from '../../providers/common/common';

declare var cordova: any;
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
  dataProduk:any;
  dataParse:any;
  item:any;
  resultData: any;
  storageDirectory: string = '';
  private fileTransfer: FileTransferObject;

  constructor(public navCtrl: NavController, public navParams: NavParams,
     public toastCtrl: ToastController,
     public authService: AuthServiceProvider,
     public common: CommonProvider,
     private transfer: FileTransfer,
     private file: File,
     public platform: Platform) { 
      this.platform.ready().then(() => {
        // make sure this is on a device, not an emulation (e.g. chrome tools device mode)
        if(!this.platform.is('cordova')) {
          return false;
        }
  
        if (this.platform.is('ios')) {
          this.storageDirectory = cordova.file.dataDirectory;
        }
        else if(this.platform.is('android')) {
          this.storageDirectory = cordova.file.dataDirectory;
        }
        else {
          // exit otherwise, but you could add further types here e.g. Windows
          return false;
        }
      });
     }
    
  ionViewWillEnter() {
    console.log(this.navParams.get('id_produk'));
    
    let id = this.navParams.get('id_produk');
    this.common.presentLoading()
    this.authService.getDataParams('getDataProduk', id).then((result)=>{
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
      message: 'Periksa Koneksi Anda'+err,
      duration: 2500
    });

    this.common.closeLoading();
    toast.present();
    });
  }

  public download(fileName, filePath){
    let url = encodeURI(filePath);
    this.fileTransfer = this.transfer.create();

    this.fileTransfer.download(url, this.storageDirectory + fileName, true).then(entry=>{
    const toast = this.toastCtrl.create({
      message: "Download Berhasil "+entry.toURL(),
      duration: 2500
    })

    toast.present();
    
    }).catch(err=>{
      const toast = this.toastCtrl.create({
        message: "Download Gagal"+err,
        duration: 2500
      })
  
      toast.present();
    })
  }

  downloadGambar(){
    this.dataParse = JSON.parse(JSON.stringify(this.dataProduk));
    let url = encodeURI('https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['gambar_produk']);
    console.log("ENCODED = "+url);
    
    console.log('https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['gambar_produk']);
    console.log("Hai "+this.dataParse[0]['gambar_produk']);
    this.download(this.dataParse[0]['gambar_produk'],'https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['gambar_produk'])
    this.download(this.dataParse[0]['slider1'],'https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['slider1'])
    this.download(this.dataParse[0]['slider2'],'https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['slider2'])
    this.download(this.dataParse[0]['slider3'],'https://testinghost3476.000webhostapp.com/assets/img/'+this.dataParse[0]['slider3'])
  }

  ionImgDilLoad(){
    this.common.closeLoading();
  }

  ionViewWillLeave() {
    this.common.closeLoading();
  }
  
}

