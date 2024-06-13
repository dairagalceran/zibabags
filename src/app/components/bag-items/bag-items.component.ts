import { Component } from '@angular/core';
import {Item} from '../../models/Item';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-bag-items',
  templateUrl: './bag-items.component.html',
  styleUrl: './bag-items.component.scss'
})

// Controller porque tiene los eventos  del patron MVC
export class BagItemsComponent {

  message: string='';

  // se recibe por parámetro  y al reconocer que necesita un cartService y
  // decide si lo crea por ser la primera vez
  //o parsa el que ya está generado
  //Patrón Singleton
  constructor(private cartService: CartService){}

  addItemToCart(item: Item){
    if(item.quantity>0){
      this.cartService.addItemToCart(item);
    }
    item.stock -= item.quantity;
    item.quantity =0;
  }

  maxReached(m: string){
    console.log(m) ;
    this.message= m;
    alert(m);
  }


  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API
  productItems: Item[] = [
    {
    "id":1,
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 5,
    "image": "assets/img/bolsa.png",
    "clearence": false,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id":  0,
    "name": "Mountain",
    "price": 7500,
    "stock": 0,
    "image": 'assets/img/mochila.webp',
    "clearence": false,
    "quantity": 0,
    "category":'mochilas',
  },
  {
    "id": 3,
    "name": "Travel Age",
    "price": 5500,
    "stock": 12,
    "image": 'assets/img/mochila.webp',
    "clearence": true,
    "quantity": 0,
    "category":'mochilas',
  },
  {
    "id":  10,
    "name": "Bolsa para zapatillas",
    "price": 7500,
    "stock": 0,
    "image": 'assets/img/bolsa.png',
    "clearence": false,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id": 7,
    "name": "Riñoneras",
    "price": 3650,
    "stock":7,
    "image": 'assets/img/rinonera.png',
    "clearence": false,
    "quantity": 0,
    "category":'rinonera',
  },
  {
    "id": 5,
    "name": "Bolsa organizadora de viaje",
    "price": 5500,
    "stock": 12,
    "image": 'assets/img/bolsa.png',
    "clearence": true,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id":8,
    "name": "Enterprise",
    "price": 4000,
    "stock": 3,
    "image": "assets/img/mochila.webp",
    "clearence": true,
    "quantity": 0,
    "category":'mochilas',
  },

];



}
