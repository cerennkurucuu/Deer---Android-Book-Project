import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTarihOnePageRoutingModule } from './book-tarih-one-routing.module';

import { BookTarihOnePage } from './book-tarih-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTarihOnePageRoutingModule
  ],
  declarations: [BookTarihOnePage]
})
export class BookTarihOnePageModule {}
