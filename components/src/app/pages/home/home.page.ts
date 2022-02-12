import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { Components } from 'src/app/interfaces/interfaces';



@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Components[] = [];

  constructor( private menu: MenuController  ) {
    // code
  }

  ngOnInit() {
    // code
  }

mostrarMenu(){
    this.menu.open();
}


}
