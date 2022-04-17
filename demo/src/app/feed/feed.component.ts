import { Component, OnInit, Input } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.css']
})
export class FeedComponent implements OnInit {


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getPublicaciones().subscribe(res => {

      this.resPublicaciones = res;
    });
  }

  resPublicaciones : any = [];

  getPublicaciones() {
    return this.http.get('https://insta-ionic-f21ba-default-rtdb.firebaseio.com/publicaciones.json')
  }


  @Input() comentario: string = '';

  postComment(comentario: string, publicacion: any): void {
    publicacion.comentario = this.comentario;
    this.comentario = "";
  }
  publicaciones = [  {
    "usuario": "@maxDog",
    "imagen": "../assets/img/playa.jpg",
    "caption": "Aqui en Cancun...",
    "comentario": "", 
    "id": "1"
  },
  {
    "usuario": "@maxDog",
    "imagen": "../assets/img/verano.jpg",
    "caption": "Playita",
    "comentario": "", 
    "id": "2"
  },
  {
    "usuario": "@maxDog",
    "imagen": "../assets/img/verano3.jpg",
    "caption": "Paraiso",
    "comentario": "", 
    "id": "3"
  }
  ];

}
