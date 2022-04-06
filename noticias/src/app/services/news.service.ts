import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Newsresponse, Article, ArticlesBycategoryAndPage } from '../interfaces';
import { map } from 'rxjs/operators'

const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public url: string = `https://newsapi.org/v2/top-headlines?country=us`;


  private ArticlesBycategoryAndPage: ArticlesBycategoryAndPage = {};

  constructor( private http: HttpClient ) {
  }


  getTopHeadNews():Observable<Article[]>{
    return this.http.get<Newsresponse>( `${this.url}&category=business`, {
      params: {
        apiKey
      }
    }).pipe(
      map( ( {articles} ) => articles )
    );
  }

  getTopHeadNewsByCategory( category:string, loadMore: boolean = false ):Observable<Article[]>{

      return this.http.get<Newsresponse>( `${this.url}&category=${category}`, {
      params: {
        apiKey
      }
    }).pipe(
      map( ( {articles} ) => articles )
    );
  }


  getArticlesByCategory( category:string ):Observable<Article[]>{


    if( Object.keys( this.ArticlesBycategoryAndPage ).includes(category) ){
      // code this.ArticlesBycategoryAndPage[category].page += 1;
    }else{
      this.ArticlesBycategoryAndPage[category] = {
        page: 0,
        articles: []
      }
    }

    const page = this.ArticlesBycategoryAndPage[category].page += 1;

    return this.http.get<Newsresponse>( `${this.url}&category=${category}&page=${page}`)
    .pipe(
      map( ( {articles} ) => articles )
    );

  }


}
