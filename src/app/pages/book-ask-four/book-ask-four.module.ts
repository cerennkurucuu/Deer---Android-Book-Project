import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookAskFourPageRoutingModule } from './book-ask-four-routing.module';

import { BookAskFourPage } from './book-ask-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookAskFourPageRoutingModule
  ],
  declarations: [BookAskFourPage]
})
export class BookAskFourPageModule {}
