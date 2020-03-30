import { LoadingController } from 'ionic-angular';
import { Injectable } from '@angular/core';

/*
  Generated class for the CommonProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommonProvider {

  public loader:any;
  constructor(public loadingCtrl: LoadingController) {
  }

  presentLoading(){
    this.loader = this.loadingCtrl.create({content:"Loading..."});
    this.loader.present();
  }

  closeLoading(){
    this.loader.dismiss();
  }

}
