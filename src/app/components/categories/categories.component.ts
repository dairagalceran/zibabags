import { Component } from '@angular/core';
import { Categoria } from '../../models/Categoria';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrl: './categories.component.scss'
})
export class CategoriesComponent {


  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API
  categorias: Categoria[] = [
    {
    "id":1,
    "name": "Bolsas",
    "image": "../../../assets/img/bolsa.png",
    "sale": true,
    "router": 'bolsas',
    "discount": 15,
  },
  {
    "id":  0,
    "name": "Mochilas",
    "image": '../../assets/img/mochila.webp',
    "sale": false,
    "router": 'mochilas',
    "discount": 0,

  },
  {
    "id": 3,
    "name": "Riñoneras",
    "image": '../../../assets/img/rinonera.png',
    "sale": false,
    "router": 'rinoneras',
    "discount": 0,
  }
];


}
