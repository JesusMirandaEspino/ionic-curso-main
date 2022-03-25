import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CordovaPage } from './cordova.page';

const routes: Routes = [
  {
    path: '',
    component: CordovaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CordovaPageRoutingModule {}
