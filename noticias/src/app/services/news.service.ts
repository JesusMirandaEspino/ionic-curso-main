import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';
import { Newsresponse, Article } from '../interfaces';
import { map } from 'rxjs/operators'

const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  public url: string = `https://newsapi.org/v2/top-headlines?country=us`;

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

  getTopHeadNewsByCategory( category:string ):Observable<Article[]>{
      return this.http.get<Newsresponse>( `${this.url}&category=${category}`, {
      params: {
        apiKey
      }
    }).pipe(
      map( ( {articles} ) => articles )
    );
  }


}
