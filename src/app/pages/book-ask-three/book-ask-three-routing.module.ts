import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookAskThreePage } from './book-ask-three.page';

const routes: Routes = [
  {
    path: '',
    component: BookAskThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookAskThreePageRoutingModule {}
