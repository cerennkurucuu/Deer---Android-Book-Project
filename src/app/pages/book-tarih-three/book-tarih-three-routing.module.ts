import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTarihThreePage } from './book-tarih-three.page';

const routes: Routes = [
  {
    path: '',
    component: BookTarihThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTarihThreePageRoutingModule {}
