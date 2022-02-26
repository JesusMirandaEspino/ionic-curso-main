import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { IonicModule } from '@ionic/angular';
import { PopoverinfoComponent } from './popoverinfo/popoverinfo.component';



@NgModule({
  declarations: [
    HeaderComponent,
    PopoverinfoComponent
  ],
  exports: [
    HeaderComponent,
    PopoverinfoComponent
  ],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
