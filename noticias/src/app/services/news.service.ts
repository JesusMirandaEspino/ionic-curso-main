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

  constructor( private http: HttpClient ) {
  }


  getTopHeadNews():Observable<Article[]>{
    return this.http.get<Newsresponse>( `https://newsapi.org/v2/top-headlines?country=us&category=business`, {
      params: {
        apiKey
      }
    }).pipe(
      map( ( {articles} ) => articles )
    );
  }


}
