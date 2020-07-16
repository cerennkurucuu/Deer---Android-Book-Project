import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAskFourPage } from './book-ask-four.page';

const routes: Routes = [
  {
    path: '',
    component: BookAskFourPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAskFourPageRoutingModule {}
