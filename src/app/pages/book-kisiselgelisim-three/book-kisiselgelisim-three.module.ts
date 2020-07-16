import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookKisiselgelisimThreePageRoutingModule } from './book-kisiselgelisim-three-routing.module';

import { BookKisiselgelisimThreePage } from './book-kisiselgelisim-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookKisiselgelisimThreePageRoutingModule
  ],
  declarations: [BookKisiselgelisimThreePage]
})
export class BookKisiselgelisimThreePageModule {}
