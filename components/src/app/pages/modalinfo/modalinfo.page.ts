import { Component, Input, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-modalinfo',
  templateUrl: './modalinfo.page.html',
  styleUrls: ['./modalinfo.page.scss'],
})
export class ModalinfoPage implements OnInit {

  @Input() nombre: string;
  @Input() apellido: string;

  constructor( public modalController: ModalController   ) { }

  ngOnInit() {
    // code
  }


salirSinArgumentos(){
  this.modalController.dismiss();
}

salirConArgumentos(){
  this.nombre = 'Miriam'
  this.apellido = 'Ponce'
  this.modalController.dismiss({
    nombre: this.nombre,
    apellido: this.apellido
  });
}

}
