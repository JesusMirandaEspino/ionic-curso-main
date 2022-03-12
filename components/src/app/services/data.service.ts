import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Components } from '../interfaces/interfaces';
import { delay } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(  private http: HttpClient ) {
    // code
  }


getUsuario(){
  return this.http.get(  'https://jsonplaceholder.typicode.com/users' );
}

getAlbums(){
  return this.http.get<any[]>(  'https://jsonplaceholder.typicode.com/albums' );
}

getMenuOption(){
  return this.http.get<Components[]>(  '/assets/data/menuOptions.json' );
}

getHeroes(){
  return this.http.get<any[]>(  '/assets/data/heroes.json' )
  .pipe(
    delay( 1500 )
  );
}


}
