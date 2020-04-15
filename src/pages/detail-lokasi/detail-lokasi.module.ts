import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetailLokasiPage } from './detail-lokasi';

@NgModule({
  declarations: [
    DetailLokasiPage,
  ],
  imports: [
    IonicPageModule.forChild(DetailLokasiPage),
  ],
})
export class DetailLokasiPageModule {}
