import { Component, OnInit } from '@angular/core';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage implements OnInit {

  constructor( private newsServices: NewsService ) {
    // code
  }

  ngOnInit() {
    this.newsServices.getTopHeadNews().subscribe( resp => {
      console.log( resp );
    });
  }


}
