import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publicacion',
  templateUrl: './publicacion.component.html',
  styleUrls: ['./publicacion.component.css']
})
export class PublicacionComponent implements OnInit {

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    this.buscarPublicacion();
  }

  publicacion = this.ruta.snapshot.params['id'];

  //BD
  publicaciones = [ {
    "usuario": "@maxDOG",
    "imagen": "../assets/img/huskt.jpeg",
    "caption": "Aqui en Cancun...",
    "comentario": "", 
    "id": "1"
  },
  {
    "usuario": "@Photoshot",
    "imagen": "../assets/img/playa.jpg",
    "caption": "En la playita...",
    "comentario": "", 
    "id": "2"
  },
  {
    "usuario": "@TheCat",
    "imagen": "../assets/img/verano3.jpg",
    "caption": "Recuerdos...",
    "comentario": "", 
    "id": "3"
  }
  ];

  publicacionDetalle: any= {}

  buscarPublicacion(): any {
    for(let i = 0; i < this.publicaciones.length; i++) {
      if(this.publicaciones[i].id == this.publicacion) {
        this.publicacionDetalle = this.publicaciones[i];
      }
    }
    return this.publicacionDetalle;
  }

}
