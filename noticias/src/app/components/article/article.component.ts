import { Component, Input, OnInit } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import { ActionSheetController, Platform } from '@ionic/angular';
import { SocialSharing } from '@awesome-cordova-plugins/social-sharing/ngx';
import { StorageServiceService } from '../../services/storage-service.service';

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
                private actionSheet: ActionSheetController,
                private socialSharing: SocialSharing,
                private storageService: StorageServiceService ) {
    // code
  }

  ngOnInit() {
    // code
  }

async onOpenMenu(){


  const articleInFavorite = this.storageService.articleInFavorites( this.article );

  const normalBtns = [
          {
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareArticle()
      },
      {
        text:  articleInFavorite ? 'Remover de Favorito' : 'Favorito',
        icon: articleInFavorite ? 'heart' : 'heart-outline',
        handler: () => this.onToggleFavorite()
      }
  ];

    const share = {
        text: 'Compartir',
        icon: 'share-outline',
        handler: () => this.onShareArticle()
  }


  if( this.platform.is( 'capacitor' ) ){
    normalBtns.unshift( share )
  }



  const actionSheet = await this.actionSheet.create({
    header: 'Opciones',
    buttons: normalBtns
  });






  await actionSheet.present();

}

onShareArticle(){

  const { title, source, url } = this.article

  this.socialSharing.share(
    title,
    source.name,
    null,
    url
  );
}


onToggleFavorite(){
  this.storageService.saveAndRemoveArticle(this.article)

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
