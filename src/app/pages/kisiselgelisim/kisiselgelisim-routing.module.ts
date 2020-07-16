import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { KisiselgelisimPage } from './kisiselgelisim.page';

const routes: Routes = [
  {
    path: '',
    component: KisiselgelisimPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KisiselgelisimPageRoutingModule {}
