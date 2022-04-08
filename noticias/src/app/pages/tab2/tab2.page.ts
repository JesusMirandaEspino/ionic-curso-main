import { Component, OnInit } from '@angular/core';
import { Article } from '../../interfaces';
import { NewsService } from '../../services/news.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  public categories: string[] = [ 'business', 'entertainment', 'general', 'health', 'science', 'sports', 'technology' ];
  public selectedCategory: string = this.categories[0];
  public articles: Article[] = [];

  constructor( public newsService: NewsService ) {
    // code
  }

  ngOnInit() {
    this.newsService.getTopHeadNewsByCategory(this.selectedCategory).subscribe( (articles) => {
      this.articles.push( ...articles );
    });
  }


  segmentChanged(event: any){
    // code this.articles = [];
    this.selectedCategory = event.detail.value;
    this.newsService.getTopHeadNewsByCategory(this.selectedCategory).subscribe( (articles) => {
      this.articles.push( ...articles );
    });
  }

  loadData(event: any){
    this.newsService.getTopHeadNewsByCategory(this.selectedCategory, true).subscribe( (articles) => {
      this.articles = articles;

      if( articles.length === this.articles.length ){
        event.target.disabled = true;
        return;
      }

      setTimeout( ()  => {
        event.target.complete();
      })

    })
  }

}
