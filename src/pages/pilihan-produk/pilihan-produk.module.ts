import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PilihanProdukPage } from './pilihan-produk';

@NgModule({
  declarations: [
    PilihanProdukPage,
  ],
  imports: [
    IonicPageModule.forChild(PilihanProdukPage),
  ],
})
export class PilihanProdukPageModule {}
