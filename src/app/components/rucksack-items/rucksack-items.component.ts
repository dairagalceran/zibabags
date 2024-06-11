import { Component } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-rucksack-items',
  templateUrl: './rucksack-items.component.html',
  styleUrl: './rucksack-items.component.scss'
})

export class RucksackItemsComponent {

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

  changeQuantity(event, item : Item): void {
    console.log(event);
    if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode ==8 ){
      console.log(event.keyCode);
      //armar numero
      //compara con  item.quantity
    }else{
      console.log("Solo números");
    }
  }

  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API
  rucksackItems: Item[] = [
    {
    "id":1,
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 3,
    "image": "assets/img/bolsa.png",
    "clearence": true,
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
    "clearence": false,
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
    "clearence": false,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id":1,
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
