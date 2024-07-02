import { Component, OnInit } from '@angular/core';
import { Item } from '../../models/Item';
import { CartService } from '../../services/cart.service';
import { Observable, map  } from 'rxjs';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss']
})


export class ShoppingCartComponent implements OnInit{

  cartList$: Observable<Item[]>;
  total$: Observable<number>;
  productItems$: Observable<Item[]>;
  cartList: Item[] =[];

  constructor(private cartService: CartService){};

  ngOnInit(){
    this.loadCartItems();
    this.total$ = this.cartList$.pipe(
      map(items => this.getTotal(items))
    );

  }

  loadCartItems(): void{
    this.cartList$ = this.cartService.shopList.asObservable();
  }

  getTotal(items: Item[]):number{
    return items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  }

  deleteItemOfCart(item: Item){
    if(item){
      this.cartService.deleteItemOfCart(item);
    }
  }

  payShopCart(items: Item[]){
    this.cartService.payCart(items).subscribe(
      response => {
        console.log('Pago realizado y stock actualizado correctamente', response);
        this.clearCartHtml();
      },
      error => {
        console.error('Error al realizar el pago', error);
      }
    );
  }

  clearCartHtml(): void{
    this.cartService.clearCartHtml();
  }

}
