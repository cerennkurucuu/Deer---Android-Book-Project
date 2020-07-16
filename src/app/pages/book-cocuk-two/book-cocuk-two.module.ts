import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCocukTwoPageRoutingModule } from './book-cocuk-two-routing.module';

import { BookCocukTwoPage } from './book-cocuk-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCocukTwoPageRoutingModule
  ],
  declarations: [BookCocukTwoPage]
})
export class BookCocukTwoPageModule {}
