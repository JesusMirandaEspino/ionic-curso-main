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

  constructor( private dataService: DataService ) {
    // code
  }

  ngOnInit() {
    // code


      this.heroes = this.dataService.getHeroes();


  }

  segmentChanged( event ){



  }

}
