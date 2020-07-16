import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookKisiselgelisimTwoPage } from './book-kisiselgelisim-two.page';

const routes: Routes = [
  {
    path: '',
    component: BookKisiselgelisimTwoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookKisiselgelisimTwoPageRoutingModule {}
