import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailProdukPage } from './detail-produk';

@NgModule({
  declarations: [
    DetailProdukPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailProdukPage),
  ],
})
export class DetailProdukPageModule {}
