import { Component, OnInit } from '@angular/core';
import * as data from '../datos.json'; 

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html', 
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  siguiendo = false;

  editandoMensaje= false;
  editandoCorreo = false;

  usuario = {
    "nombre":"Max",
    "alias": "@maxelperrito",
    "fotoPerfil": "../assets/img/husky.jpeg",
    "seguidores": 200,
    "seguidos": 20,
    "bio": "Guau", 
    "publicacioness": [
      "../assets/img/playa.jpg",
      "../assets/img/verano.jpg",
      "../assets/img/verano3.jpg"
    ]
  }

  seguir(): void {
    this.siguiendo = !this.siguiendo;
  }

  enviarMensaje(): void {

  }

  enviarEmail(): void {

  }

  desplegarOpciones(): void {
    //En proceso
  }

}
