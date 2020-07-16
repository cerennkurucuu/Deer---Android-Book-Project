import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FelsefePageRoutingModule } from './felsefe-routing.module';

import { FelsefePage } from './felsefe.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FelsefePageRoutingModule
  ],
  declarations: [FelsefePage]
})
export class FelsefePageModule {}
