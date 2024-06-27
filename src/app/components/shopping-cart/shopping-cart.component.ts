import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { CartService } from '../../services/cart.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent implements OnInit{

  cartList$: Observable<Item[]>;
  total$: Observable<number>;

  constructor(private cartService: CartService){};

  ngOnInit(){
    this.cartList$ = this.cartService.shopList.asObservable();
    this.total$ = this.cartList$.pipe(
      map(items => this.getTotal(items))
    );

  }


  getTotal(items: Item[]):number{
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  }

  deleteItemOfCart(item: Item){
    if(item){
      this.cartService.deleteItemOfCart(item);
    }
  }

}

/**
 *
  //MOCK utilizado para probar el front end hasta que los datos se traigan de una API

  productItems: Item[] = [
    {
    "id":1,
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 5,
    "image": "assets/img/bolsa.png",
    "sale": false,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id":  0,
    "name": "Mountain",
    "price": 7500,
    "stock": 0,
    "image": 'assets/img/mochila.webp',
    "sale": false,
    "quantity": 0,
    "category":'mochilas',
  },
  {
    "id": 3,
    "name": "Travel Age",
    "price": 5500,
    "stock": 12,
    "image": 'assets/img/mochila.webp',
    "sale": true,
    "quantity": 0,
    "category":'mochilas',
  },
  {
    "id":  10,
    "name": "Bolsa para zapatillas",
    "price": 7500,
    "stock": 0,
    "image": 'assets/img/bolsa.png',
    "sale": false,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id": 7,
    "name": "Riñoneras",
    "price": 3650,
    "stock":7,
    "image": 'assets/img/rinonera.png',
    "sale": false,
    "quantity": 0,
    "category":'rinonera',
  },
  {
    "id": 5,
    "name": "Bolsa organizadora de viaje",
    "price": 5500,
    "stock": 12,
    "image": 'assets/img/bolsa.png',
    "sale": true,
    "quantity": 0,
    "category":'bolsas',
  },
  {
    "id":8,
    "name": "Enterprise",
    "price": 4000,
    "stock": 3,
    "image": "assets/img/mochila.webp",
    "sale": true,
    "quantity": 0,
    "category":'mochilas',
  },

];
 */
