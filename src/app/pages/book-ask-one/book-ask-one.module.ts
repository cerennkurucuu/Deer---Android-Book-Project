import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAskOnePageRoutingModule } from './book-ask-one-routing.module';

import { BookAskOnePage } from './book-ask-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAskOnePageRoutingModule
  ],
  declarations: [BookAskOnePage]
})
export class BookAskOnePageModule {}
