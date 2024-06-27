import { Component,OnInit } from '@angular/core';
import {Item} from '../../models/Item';
import { CartService } from '../../services/cart.service';
import { Observable } from 'rxjs';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'app-bag-items',
  templateUrl: './bag-items.component.html',
  styleUrls: ['./bag-items.component.scss'],
})


export class BagItemsComponent implements OnInit{
  product: Item;
  cartList$: Observable<Item[]>;
  productItems$: Observable<Item[]>;

  // se recibe por parámetro  y al reconocer que necesita un cartService y
  // decide si lo crea por ser la primera vez
  //o parsa el que ya está generado
  //Patrón Singleton
  constructor(
              private cartService: CartService,
              private productsDataService: ProductsDataService ){
  }


  ngOnInit(){
    this.cartList$ = this.cartService.shopList.asObservable();
    this.productItems$ = this.productsDataService.productList.asObservable(); //productItems$ siempre tendrá  los datos más actualizados.

  }


  addItemToCart(item: Item){
    if(item.quantity>0){
      this.cartService.addItemToCart(item);
    }
    item.stock -= item.quantity;
    item.quantity =0;
  }


}
