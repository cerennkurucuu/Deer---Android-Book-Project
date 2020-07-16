import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFelsefeOnePageRoutingModule } from './book-felsefe-one-routing.module';

import { BookFelsefeOnePage } from './book-felsefe-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFelsefeOnePageRoutingModule
  ],
  declarations: [BookFelsefeOnePage]
})
export class BookFelsefeOnePageModule {}
