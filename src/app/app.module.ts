import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ProdukPage } from '../pages/produk/produk';
import { LokasiPage } from '../pages/lokasi/lokasi';
import { MarketingPage } from '../pages/marketing/marketing';
import { DetailProdukPage } from '../pages/detail-produk/detail-produk';
import { AuthServiceProvider } from '../providers/auth-service/auth-service';
import { HttpModule } from '@angular/http';
import { CommonProvider } from '../providers/common/common';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ProdukPage,
    LokasiPage,
    MarketingPage,
    DetailProdukPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ProdukPage,
    LokasiPage,
    MarketingPage,
    DetailProdukPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServiceProvider,
    CommonProvider
  ]
})
export class AppModule {}
