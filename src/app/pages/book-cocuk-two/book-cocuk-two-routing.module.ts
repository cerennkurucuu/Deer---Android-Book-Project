import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCocukTwoPage } from './book-cocuk-two.page';

const routes: Routes = [
  {
    path: '',
    component: BookCocukTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCocukTwoPageRoutingModule {}
