import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CocukPageRoutingModule } from './cocuk-routing.module';

import { CocukPage } from './cocuk.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CocukPageRoutingModule
  ],
  declarations: [CocukPage]
})
export class CocukPageModule {}
