import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAskThreePageRoutingModule } from './book-ask-three-routing.module';

import { BookAskThreePage } from './book-ask-three.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAskThreePageRoutingModule
  ],
  declarations: [BookAskThreePage]
})
export class BookAskThreePageModule {}
