import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalinfoPage } from '../modalinfo/modalinfo.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor(public modalController: ModalController  ) { }

  ngOnInit() {
    // code
  }


  async mostrartModal(){

    const modal = await this.modalController.create({
      component: ModalinfoPage,
    });
    await modal.present();
  }


}
