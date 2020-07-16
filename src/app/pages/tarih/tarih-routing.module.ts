import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TarihPage } from './tarih.page';

const routes: Routes = [
  {
    path: '',
    component: TarihPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TarihPageRoutingModule {}
