import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from '../../services/data.service';


@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  heroes: Observable<any>;
  publisher: string = '';

  constructor( private dataService: DataService ) {
    // code
  }

  ngOnInit() {
    // code


      this.heroes = this.dataService.getHeroes();


  }

  segmentChanged( event: any ){

    if( event.detail.value === 'todos' ){
      this.publisher = '';
    }else{
      this.publisher= event.detail.value;
    }
  }

}
