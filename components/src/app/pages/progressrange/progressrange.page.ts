import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progressrange',
  templateUrl: './progressrange.page.html',
  styleUrls: ['./progressrange.page.scss'],
})
export class ProgressrangePage implements OnInit {

  percentage: number = 0;

  min: number = 0;
  max: number = 100;

  constructor() {
    // code
  }

  ngOnInit() {
    //  code
  }


  rango( event: any ){
    this.percentage = event.detail.value / 100;
  }

}
