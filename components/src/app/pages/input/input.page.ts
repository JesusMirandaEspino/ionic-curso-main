import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
})
export class InputPage implements OnInit {

  nombre: string = 'Jesus';

  usuario = {
    email: '',
    password: ''
  }

  constructor() {
    // code
  }

  ngOnInit() {
    // code
  }

  onSubmit(){
    console.log( 'Submit' );
  }

}
