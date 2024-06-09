import { Component } from '@angular/core';
import {Item} from '../../models/Item';

@Component({
  selector: 'app-bag-items',
  templateUrl: './bag-items.component.html',
  styleUrl: './bag-items.component.scss'
})

export class BagItemsComponent {

  increaseQuantity(item : Item): void{
    if(item.stock> item.quantity){
      item.quantity++;
    }
  }

  decreseQuantity(item: Item): void{
    if(item.quantity>0 || item.stock<item.quantity){
      item.quantity--;
    }
  }

  changeQuantity(event, item : Item){
    console.log(event);
    if(event.keyCode >= 48 && event.keyCode <= 57){
      console.log(event.keyCode);
      return item.quantity
    }else{
      return alert("Solo números");
    }
  }

  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API
  bagItems: Item[] = [
    {
    "id":1,
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 3,
    "image": "../../assets/img/bolsa.png",
    "clearence": true,
    "quantity": 0,
    "category":'',
  },
  {
    "name": "Mochilas",
    "price": 7500,
    "stock": 0,
    "image": '../../assets/img/mochila.webp',
    "clearence": false,
    "id":  0,
    "quantity": 0,
    "category":'',
  },
  {
    "name": "Riñoneras",
    "price": 5500,
    "stock": 12,
    "image": '../../assets/img/rinonera.png',
    "clearence": false,
    "id": 3,
    "quantity": 10,
    "category":'',
  }
];



}
