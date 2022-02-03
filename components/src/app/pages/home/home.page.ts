import { Component, OnInit } from '@angular/core';

interface Components{
  icon:       string;
  name:       string;
  redirectTo: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

  components: Components[] = [
    {
      icon: 'american-football-outline',
      name: 'Action-sheet',
      redirectTo: '/action-sheet'
    },
      {
      icon: 'alert-outline',
      name: 'Alert',
      redirectTo: '/alert'
    },
    {
      icon: 'beaker-outline',
      name: 'Avatar',
      redirectTo: '/avatar'
    },
    {
      icon: 'radio-button-off-outline',
      name: 'Buttons',
      redirectTo: '/buttons'
    },
      {
      icon: 'card-outline',
      name: 'Cards',
      redirectTo: '/card'
    },
      {
      icon: 'checkmark-circle-outline',
      name: 'Checkbox',
      redirectTo: '/checkbox'
    },
      {
      icon: 'calendar-outline',
      name: 'DateTime',
      redirectTo: '/date-time'
    },
      {
      icon: 'car-outline',
      name: 'Fab',
      redirectTo: '/fab'
    },
      {
      icon: 'grid-outline',
      name: 'Grid',
      redirectTo: '/grid'
    },
      {
      icon: 'infinite-outline',
      name: 'Infinite',
      redirectTo: '/infinite'
    },
      {
      icon: 'hammer-outline',
      name: 'Input Forms',
      redirectTo: '/input'
    },
      {
      icon: 'list-outline',
      name: 'List',
      redirectTo: '/list'
    },
      {
      icon: 'reorder-three-outline',
      name: 'Reorder',
      redirectTo: '/reorder'
    },
  ];

  constructor() {
    // code
  }

  ngOnInit() {
    // code
  }

}
