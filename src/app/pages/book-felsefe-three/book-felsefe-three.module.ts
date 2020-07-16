import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFelsefeThreePageRoutingModule } from './book-felsefe-three-routing.module';

import { BookFelsefeThreePage } from './book-felsefe-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFelsefeThreePageRoutingModule
  ],
  declarations: [BookFelsefeThreePage]
})
export class BookFelsefeThreePageModule {}
