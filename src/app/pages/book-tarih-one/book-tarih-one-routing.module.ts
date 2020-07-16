import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTarihOnePage } from './book-tarih-one.page';

const routes: Routes = [
  {
    path: '',
    component: BookTarihOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTarihOnePageRoutingModule {}
