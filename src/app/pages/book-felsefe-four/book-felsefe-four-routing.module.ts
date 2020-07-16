import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFelsefeFourPage } from './book-felsefe-four.page';

const routes: Routes = [
  {
    path: '',
    component: BookFelsefeFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFelsefeFourPageRoutingModule {}
