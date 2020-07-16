import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTarihTwoPageRoutingModule } from './book-tarih-two-routing.module';

import { BookTarihTwoPage } from './book-tarih-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTarihTwoPageRoutingModule
  ],
  declarations: [BookTarihTwoPage]
})
export class BookTarihTwoPageModule {}
