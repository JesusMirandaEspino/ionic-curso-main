import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverinfo',
  templateUrl: './popoverinfo.component.html',
  styleUrls: ['./popoverinfo.component.scss'],
})
export class PopoverinfoComponent implements OnInit {

  items = Array(40);

  constructor( private popoverController: PopoverController ) {
    // code
  }

  ngOnInit(){
    // code
  }

  onClick( value: number ){
    this.popoverController.dismiss({
      item: value
    });
  }

}
