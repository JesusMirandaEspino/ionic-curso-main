import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProgressrangePageRoutingModule } from './progressrange-routing.module';

import { ProgressrangePage } from './progressrange.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProgressrangePageRoutingModule
  ],
  declarations: [ProgressrangePage]
})
export class ProgressrangePageModule {}
