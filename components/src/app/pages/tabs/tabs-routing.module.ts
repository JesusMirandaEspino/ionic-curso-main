import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'account',
        loadChildren: () => import('../avatar/avatar.module').then(
          m => m.AvatarPageModule
        )

      },
      {
        path: 'call',
        loadChildren: () => import('../modalinfo/modalinfo-routing.module').then(
          m => m.ModalinfoPageRoutingModule
        )
      },
      {
        path: 'settings',
        loadChildren: () => import('../list/list-routing.module').then(
          m => m.ListPageRoutingModule
        )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
