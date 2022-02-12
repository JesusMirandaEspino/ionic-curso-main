import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Components } from '../interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(  private http: HttpClient ) {
    // code
  }


getUsuario(){
  return this.http.get(  'https://jsonplaceholder.typicode.com/users ' );
}

getMenuOption(){
  return this.http.get<Components[]>(  '/assets/data/menuOptions.json' );
}


}
