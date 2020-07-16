import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BookFelsefeTwoPageRoutingModule } from './book-felsefe-two-routing.module';

import { BookFelsefeTwoPage } from './book-felsefe-two.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BookFelsefeTwoPageRoutingModule
  ],
  declarations: [BookFelsefeTwoPage]
})
export class BookFelsefeTwoPageModule {}
