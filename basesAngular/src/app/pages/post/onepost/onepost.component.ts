import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-onepost',
  templateUrl: './onepost.component.html',
  styleUrls: ['./onepost.component.scss']
})
export class OnepostComponent implements OnInit {

  @Input() mensaje:any;
  @Output() seleccionarPost = new EventEmitter<number>();

  constructor() { }

  ngOnInit(): void {
  }

  seleccionar(){
    this.seleccionarPost.emit( this.mensaje.id );
  }

}
