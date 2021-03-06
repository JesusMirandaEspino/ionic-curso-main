import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {

  transform(arr: any[], text: string, columna: string = 'title'): any[] {

    if( text === '' ){
      return arr;
    }

    if( !arr ){
      return arr;
    }

    text = text.toLowerCase();
    return arr.filter( item => item[columna].toLowerCase().includes( text )  );
  }

}
