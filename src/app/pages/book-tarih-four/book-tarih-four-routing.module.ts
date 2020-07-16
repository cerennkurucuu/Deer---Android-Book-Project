import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookTarihFourPage } from './book-tarih-four.page';

const routes: Routes = [
  {
    path: '',
    component: BookTarihFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookTarihFourPageRoutingModule {}
