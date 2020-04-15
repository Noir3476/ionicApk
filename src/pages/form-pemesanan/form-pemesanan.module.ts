import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FormPemesananPage } from './form-pemesanan';

@NgModule({
  declarations: [
    FormPemesananPage,
  ],
  imports: [
    IonicPageModule.forChild(FormPemesananPage),
  ],
})
export class FormPemesananPageModule {}
