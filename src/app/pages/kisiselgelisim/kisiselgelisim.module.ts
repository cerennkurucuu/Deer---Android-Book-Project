import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { KisiselgelisimPageRoutingModule } from './kisiselgelisim-routing.module';

import { KisiselgelisimPage } from './kisiselgelisim.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    KisiselgelisimPageRoutingModule
  ],
  declarations: [KisiselgelisimPage]
})
export class KisiselgelisimPageModule {}
