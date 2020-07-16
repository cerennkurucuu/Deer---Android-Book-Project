import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookFelsefeThreePage } from './book-felsefe-three.page';

const routes: Routes = [
  {
    path: '',
    component: BookFelsefeThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookFelsefeThreePageRoutingModule {}
