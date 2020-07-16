import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTarihThreePageRoutingModule } from './book-tarih-three-routing.module';

import { BookTarihThreePage } from './book-tarih-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTarihThreePageRoutingModule
  ],
  declarations: [BookTarihThreePage]
})
export class BookTarihThreePageModule {}
