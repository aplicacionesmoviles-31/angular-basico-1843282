import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hola, mundo!';

  imagenes = [
    "../assets/img/verano.jpg",
    "../assets/img/playa.jpg",
    "../assets/img/verano3.jpg"
  ];

  ingles = false;
}
