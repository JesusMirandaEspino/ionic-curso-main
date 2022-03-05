import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
})
export class SearchPage implements OnInit {

  albums: any[] = [];

  constructor( private dataService: DataService ) {
    // code
  }

  ngOnInit() {

    this.dataService.getAlbums().subscribe( resp => {
      this.albums = resp;
    });

    // code
  }


ionSearchChange( event: string ){


  console.log(event );
}

}
