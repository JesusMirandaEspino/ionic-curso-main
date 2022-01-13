import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

  mensajesPost: any;

  constructor( private dataService: DataService ) { }

  ngOnInit(): void {

    this.mensajesPost = this.dataService.getPosts();

    /*
    this.dataService.getPosts().subscribe(
      (post: any) => {
        this.mensajesPost = post; }
    );
    */

  }


  Escuchar( id: any){
    console.log( 'Click en:', id  );
  }


}
