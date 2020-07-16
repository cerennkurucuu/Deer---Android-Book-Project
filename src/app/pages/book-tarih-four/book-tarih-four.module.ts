import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookTarihFourPageRoutingModule } from './book-tarih-four-routing.module';

import { BookTarihFourPage } from './book-tarih-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookTarihFourPageRoutingModule
  ],
  declarations: [BookTarihFourPage]
})
export class BookTarihFourPageModule {}
