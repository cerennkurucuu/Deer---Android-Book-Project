import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TarihPageRoutingModule } from './tarih-routing.module';

import { TarihPage } from './tarih.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TarihPageRoutingModule
  ],
  declarations: [TarihPage]
})
export class TarihPageModule {}
