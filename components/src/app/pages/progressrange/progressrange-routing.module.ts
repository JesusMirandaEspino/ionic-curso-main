import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProgressrangePage } from './progressrange.page';

const routes: Routes = [
  {
    path: '',
    component: ProgressrangePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProgressrangePageRoutingModule {}
