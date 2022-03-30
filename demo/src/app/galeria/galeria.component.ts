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
    "nombre":"Max",
    "alias": "@maxelperrito",
    "fotoPerfil": "../assets/img/verano.jpg",
    "seguidores": 1500,
    "seguidos": 20,
    "bio": "Guau", 
    "publicaciones": [
      "../assets/img/playa.jpg",
      "../assets/img/verano.jpg",
      "../assets/img/verano3.jpg"
    ]
  }

}
