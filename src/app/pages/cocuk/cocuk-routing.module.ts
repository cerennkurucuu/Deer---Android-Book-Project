import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CocukPage } from './cocuk.page';

const routes: Routes = [
  {
    path: '',
    component: CocukPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CocukPageRoutingModule {}
