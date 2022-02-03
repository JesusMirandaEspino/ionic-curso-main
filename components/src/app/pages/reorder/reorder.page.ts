import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-reorder',
  templateUrl: './reorder.page.html',
  styleUrls: ['./reorder.page.scss'],
})
export class ReorderPage implements OnInit {

  reorderEnable: boolean = true;

  personajes: string[] = [ 'Spiderman', 'Batman', 'Ironman', 'Goku', 'Vegeta' ];

  constructor() { }

  ngOnInit() {
  }

  doReorder( event: any ){


    const mover = this.personajes.splice( event.detail.from, 1 )[0];
    this.personajes.splice( event.detail.to, 0, mover  )

    event.detail.complete();
  }

}
