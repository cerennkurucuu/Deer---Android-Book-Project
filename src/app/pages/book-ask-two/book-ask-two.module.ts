import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAskTwoPageRoutingModule } from './book-ask-two-routing.module';

import { BookAskTwoPage } from './book-ask-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAskTwoPageRoutingModule
  ],
  declarations: [BookAskTwoPage]
})
export class BookAskTwoPageModule {}
