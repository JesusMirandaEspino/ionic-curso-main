import { Component, OnInit, ViewChild  } from '@angular/core';
import { IonInfiniteScroll } from '@ionic/angular';
import { Article } from '../../interfaces';
import { NewsService } from '../../services/news.service';
@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {

  @ViewChild( IonInfiniteScroll, { static: true } ) infiniteScroll: IonInfiniteScroll;

  public articles: Article[] = [];

  constructor(  private newsServices: NewsService  ) {}

  ngOnInit() {
    this.newsServices.getTopHeadNews().subscribe( (articles) => {
      this.articles.push(...articles);
    });

  }


loadData(){
    this.newsServices.getTopHeadNews().subscribe( (articles) => {
      this.articles = articles;

      if( articles.length === this.articles.length ){
        this.infiniteScroll.disabled = true;
        return;
      }

      setTimeout( ()  => {
        this.infiniteScroll.complete();
      });

    });
  }

}
