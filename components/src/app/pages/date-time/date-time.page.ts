import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
})
export class DateTimePage implements OnInit {

  fechaNaci: Date = new Date();

  customPickerOptions = {
    buttons: [
      {
        text: 'Hola',
        handler: ( event: any ) => {
          console.log( event );
        }
      },
      {
        text: 'Mundo',
        handler: () => {
          console.log( 'Log' );
        }
      }
    ]
  }

  constructor() { }

  ngOnInit() {
  }

cambioChange(event:any){
  console.log( new Date( event.detail.value ) );
}



}
