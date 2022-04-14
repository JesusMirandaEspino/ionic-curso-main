import { Component } from '@angular/core';
import { Article } from '../../interfaces';
import { StorageServiceService } from '../../services/storage-service.service';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {

  get articles(): Article[] {
    return this.storageservice.getLocalArticles;
  }

  constructor( private storageservice: StorageServiceService  ) {

  }

}
