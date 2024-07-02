import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { BehaviorSubject, Observable } from 'rxjs';
import { ProductsDataService } from './products-data.service';

/**
 * Maneja la LÓGICA del carrito
 * declares that this service should be created
 * by the root application injector
 */
@Injectable({
  providedIn: 'root'
})



export class CartService {

    /**     se crea la variable con guión bajo a observar como privada
     *      encapsulamos la variable con BehaviorSubject() para
     *      suscribirse y notificar cambios.
     */
    private _shopList: Item[] = [];
    shopList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this._shopList);

    constructor(private productDataService: ProductsDataService) { }

    addItemToCart(item: Item):void {
      let product:Item |undefined = this._shopList.find(x => x.id == item.id);
      if(!product){
        const addItem = {...item, price: this.getPrice(item)};
        this._shopList.unshift(addItem);
      }
      else{
        product.quantity += item.quantity;
        product.price =   this.getPrice(item);

      }
      this.shopList.next(this._shopList);
    }

    deleteItemOfCart(item: Item):void{
      let stockToRestore : number = 0;
      let product = this._shopList.find(x => x.id == item.id);
      if(product){
        product.stock -= item.quantity;
        stockToRestore = item.quantity;
        this._shopList = this._shopList.filter(x => x.id != item.id);
        this.shopList.next(this._shopList); //Emitir cambio
      }
      this.updateStock(item, stockToRestore);
    }

    updateStock(item: Item, stockToRestore: number):void{
      this.productDataService.updateStock(item, stockToRestore);
    }

    getPrice(item: Item): number{
     return item.sale ? item.price * (1 - item.discount) : item.price;
    }


  payCart(items: Item[]){
    console.log(" dentro de payCart ")
    return this.productDataService.updateStockBeforePay(items);
  }

  clearCartHtml(){
    this._shopList = [];
    this.shopList.next(this._shopList);
  }

}

