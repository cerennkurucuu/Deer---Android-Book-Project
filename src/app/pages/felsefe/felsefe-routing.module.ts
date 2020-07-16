import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FelsefePage } from './felsefe.page';

const routes: Routes = [
  {
    path: '',
    component: FelsefePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FelsefePageRoutingModule {}
