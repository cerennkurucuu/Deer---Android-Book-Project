import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFelsefeTwoPage } from './book-felsefe-two.page';

const routes: Routes = [
  {
    path: '',
    component: BookFelsefeTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFelsefeTwoPageRoutingModule {}
