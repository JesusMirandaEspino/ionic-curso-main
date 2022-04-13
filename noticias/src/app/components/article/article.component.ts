import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.scss'],
})
export class ArticleComponent implements OnInit {

  @Input() article;
  @Input() i:number;

  constructor(  public iab: InAppBrowser,
                private platform: Platform,
                private actionSheet: ActionSheetController ) {
    // code
  }

  ngOnInit() {
    // code
  }

async onOpenMenu(){
  const actionSheet = await this.actionSheet.create({
    header: 'Opciones',
    buttons: [
      {
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareArticle()
      },
      {
        text: 'Favorito',
        icon: 'heart-outline',
        handler: () => this.onToggleFavorite()
      }
    ]
  });

  await actionSheet.present();

}

onShareArticle(){
  console.log('share article');
}


onToggleFavorite(){
  console.log('favorito');
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
