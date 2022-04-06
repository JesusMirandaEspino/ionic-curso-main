import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
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
    return this.getArticlesByCategory( 'business' );
  }

  getTopHeadNewsByCategory( category:string, loadMore: boolean = false ):Observable<Article[]>{


    if( loadMore ){
      return this.getArticlesByCategory( category );
    }

    if( this.ArticlesBycategoryAndPage[category] ){
      return of(this.ArticlesBycategoryAndPage[category].articles);
    }

      return this.getArticlesByCategory( category );
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

    return this.http.get<Newsresponse>( `${this.url}&category=${category}&page=${page}`, {
      params: {
        apiKey
      }} )
    .pipe(
      map( ( {articles} ) => {

        if( articles.length === 0 ) return this.ArticlesBycategoryAndPage[category].articles;

        this.ArticlesBycategoryAndPage[category] = {
          page: page,
          articles: [ ...this.ArticlesBycategoryAndPage[category].articles, ...articles ]
        }
        return this.ArticlesBycategoryAndPage[category].articles;

      })
    );

  }


}
