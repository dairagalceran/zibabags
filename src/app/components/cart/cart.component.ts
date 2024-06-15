import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Item } from '../../models/Item';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})


export class CartComponent implements OnInit{

  cartList$: Observable<Item[]>;

  constructor(private cartService: CartService){};


  ngOnInit() {
    /**
     *     this.cartService.shopList.subscribe((observable) => this.cartList = observable);
     *      se usaria si hay necesidad de  utilizar la lista/el dato para hacer algo en elinit hay que hacer esta
     *      subscripción
     */

    this.cartList$ = this.cartService.shopList.asObservable();

  }


  deleteItemOfCart(item: Item){
    if(item){
      this.cartService.deleteItemOfCart(item);
    }
    console.log("delete of cart.comp.ts "+item.id);
  }


}


