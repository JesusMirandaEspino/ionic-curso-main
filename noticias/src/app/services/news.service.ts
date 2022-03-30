import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

const apiKey = environment.apikey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor( private http: HttpClient ) {
  }


  getTopHeadNews(){
    return this.http.get( `https://newsapi.org/v2/top-headlines?country=us&category=business`, {
      params: {
        apiKey
      }
    });
  }


}
