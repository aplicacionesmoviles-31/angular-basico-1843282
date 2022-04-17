import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})
export class GaleriaComponent implements OnInit {
  constructor() { }
  ngOnInit(): void {
  }
  usuario = {
    "nombre":"MaxDog",
    "alias": "@Husky",
    "fotoPerfil": "../assets/img/husky.jpeg",
    "seguidores": 200,
    "seguidos": 20,
    "bio": "Guau", 
    "publicaciones" : [ {
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
    ]
  }

}
