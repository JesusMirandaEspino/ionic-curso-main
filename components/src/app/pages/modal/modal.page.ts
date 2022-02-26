import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalinfoPage } from '../modalinfo/modalinfo.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  public nombre = 'Jesus';
  public apellido = 'Miranda'

  constructor(public modalController: ModalController  ) { }

  ngOnInit() {
    // code
  }

  async mostrartModal(){

    const modal = await this.modalController.create({
      component: ModalinfoPage,
      componentProps: {
            nombre: this.nombre,
            apellido : this.apellido,
      }
    });
    await modal.present();

    const { data } = await modal.onDidDismiss();

    this.nombre = data.nombre;
    this.apellido = data.apellido;

  }


}
