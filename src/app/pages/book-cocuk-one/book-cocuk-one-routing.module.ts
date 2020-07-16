import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookCocukOnePage } from './book-cocuk-one.page';

const routes: Routes = [
  {
    path: '',
    component: BookCocukOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookCocukOnePageRoutingModule {}
