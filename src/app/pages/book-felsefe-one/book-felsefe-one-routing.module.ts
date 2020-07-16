import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFelsefeOnePage } from './book-felsefe-one.page';

const routes: Routes = [
  {
    path: '',
    component: BookFelsefeOnePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFelsefeOnePageRoutingModule {}
