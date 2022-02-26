import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverinfoComponent } from 'src/app/components/popoverinfo/popoverinfo.component';

@Component({
  selector: 'app-popover',
  templateUrl: './popover.page.html',
  styleUrls: ['./popover.page.scss'],
})
export class PopoverPage implements OnInit {

  constructor( public popoverController: PopoverController ){
    // code
  }

  ngOnInit() {
  // code
  }

async presentPopover(ev: any) {
    const popover = await this.popoverController.create({
      component: PopoverinfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: false,
    });
    await popover.present();

    const { role } = await popover.onDidDismiss();
    console.log('onDidDismiss resolved with role', role);
  }



}
