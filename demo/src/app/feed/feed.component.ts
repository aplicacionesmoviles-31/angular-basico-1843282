import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  @Input() comentario: string = '';

  postComment(_comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
  }

  publicaciones = [ {
    "usuario": "@maxschultz",
    "imagen": "../assets/img/playa.jpg",
    "caption": "Aqui en la playa",
    "comentario": ""
  },
  {
    "usuario": "@jackWhitte",
    "imagen": "../assets/img/verano.jpg",
    "caption": "Verano 2021",
    "comentario": ""
  },
  {
    "usuario": "@WillJohnson",
    "imagen": "../assets/img/verano3.jpg", 
    "caption": "Paisajes en paises bajos",
    "comentario": ""
  }
  ];

}
