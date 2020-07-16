import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookKisiselgelisimTwoPageRoutingModule } from './book-kisiselgelisim-two-routing.module';

import { BookKisiselgelisimTwoPage } from './book-kisiselgelisim-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookKisiselgelisimTwoPageRoutingModule
  ],
  declarations: [BookKisiselgelisimTwoPage]
})
export class BookKisiselgelisimTwoPageModule {}
