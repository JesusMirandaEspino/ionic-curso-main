import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.page.html',
  styleUrls: ['./checkbox.page.scss'],
})
export class CheckboxPage implements OnInit {

    form = [
      {
        name: 'primary',
        val: 'primary',
        isChecked: false
      },
      {
        name: 'secondary',
        val: 'secondary',
        isChecked: false
      },
      {
        name: 'danger',
        val: 'danger',
        isChecked: false
      },
      {
        name: 'dark',
        val: 'dark',
        isChecked: false //
      },
      {
        name: 'light',
        val: 'light',
        isChecked: false
      },
    ];

  constructor() { }

  ngOnInit() {
  }

}
