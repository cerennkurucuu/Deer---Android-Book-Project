import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTarihTwoPage } from './book-tarih-two.page';

const routes: Routes = [
  {
    path: '',
    component: BookTarihTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTarihTwoPageRoutingModule {}
