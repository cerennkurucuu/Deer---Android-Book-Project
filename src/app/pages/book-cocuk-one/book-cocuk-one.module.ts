import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookCocukOnePageRoutingModule } from './book-cocuk-one-routing.module';

import { BookCocukOnePage } from './book-cocuk-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookCocukOnePageRoutingModule
  ],
  declarations: [BookCocukOnePage]
})
export class BookCocukOnePageModule {}
