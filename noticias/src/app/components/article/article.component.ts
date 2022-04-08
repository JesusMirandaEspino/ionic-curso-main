import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article;
  @Input() i:number;

  constructor( public iab: InAppBrowser, private platform: Platform ) {
    // code
  }

  ngOnInit() {
    // code
  }

onClick(){
  // code
}


openArticle(){

  if( this.platform.is('ios') || this.platform.is('android') ){
    const browser = this.iab.create( this.article.url );
    browser.show();
    return;
  }

  window.open( this.article.url, '_blanck' );

}


}
