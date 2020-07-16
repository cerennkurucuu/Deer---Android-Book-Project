import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BookKisiselgelisimThreePage } from './book-kisiselgelisim-three.page';

const routes: Routes = [
  {
    path: '',
    component: BookKisiselgelisimThreePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BookKisiselgelisimThreePageRoutingModule {}
