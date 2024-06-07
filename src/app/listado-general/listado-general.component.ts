import { Component } from '@angular/core';
import { Categoria } from './Categoria';


@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrl: './listado-general.component.scss'
})
export class ListadoGeneralComponent {

  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API
  categorias: Categoria[] = [
    {
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 3,
    "image": 'assets/img/bolsa.png',
    "clearence": true,
  },
  {
    "name": "Mochilas",
    "price": 7500,
    "stock": 0,
    "image": 'assets/img/mochila.webp',
    "clearence": false,
  },
  {
    "name": "Riñoneras",
    "price": 5500,
    "stock": 12,
    "image": 'assets/img/rinonera.png',
    "clearence": false,
  }
];

}
