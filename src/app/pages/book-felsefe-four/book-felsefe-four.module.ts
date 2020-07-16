import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFelsefeFourPageRoutingModule } from './book-felsefe-four-routing.module';

import { BookFelsefeFourPage } from './book-felsefe-four.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFelsefeFourPageRoutingModule
  ],
  declarations: [BookFelsefeFourPage]
})
export class BookFelsefeFourPageModule {}
