import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { FileTransfer, FileTransferObject } from '@ionic-native/file-transfer';
import { File } from '@ionic-native/file';
import { HttpClientModule} from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdukPage } from '../pages/produk/produk';
import { LokasiPage } from '../pages/lokasi/lokasi';
import { MarketingPage } from '../pages/marketing/marketing';
import { DetailProdukPage } from '../pages/detail-produk/detail-produk';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { CommonProvider } from '../providers/common/common';
import { DetailLokasiPage } from '../pages/detail-lokasi/detail-lokasi';
import { PilihanProdukPage } from '../pages/pilihan-produk/pilihan-produk';
import { FormPemesananPage } from '../pages/form-pemesanan/form-pemesanan';
import { FormBuilder } from '@angular/forms';
import { RecaptchaModule } from 'ng-recaptcha';
import { LoginPage } from '../pages/login/login';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdukPage,
    LokasiPage,
    MarketingPage,
    PilihanProdukPage,
    DetailProdukPage,
    DetailLokasiPage,
    FormPemesananPage,
    LoginPage,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RecaptchaModule.forRoot(),
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdukPage,
    LokasiPage,
    MarketingPage,
    PilihanProdukPage,
    DetailProdukPage,
    DetailLokasiPage,
    FormPemesananPage,
    LoginPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CommonProvider,
    FormBuilder,
    FileTransfer,
    File,
    FileTransferObject,
  ]
})
export class AppModule {}
