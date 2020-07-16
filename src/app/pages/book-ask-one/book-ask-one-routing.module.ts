import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAskOnePage } from './book-ask-one.page';

const routes: Routes = [
  {
    path: '',
    component: BookAskOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAskOnePageRoutingModule {}
