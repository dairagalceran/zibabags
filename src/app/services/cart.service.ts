import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { BehaviorSubject } from 'rxjs';
import { ProductsDataService } from './products-data.service';

/**
 * Maneja la LÓGICA del carrito
 * declares that this service should be created
 * by the root application injector
 */
@Injectable({
  providedIn: 'root'
})


/**
 * Acá se agregan métodos y funciones que se
 * necesiten y se van a utilizar desde los componentes que lo necesiten
 */
export class CartService {

    /**
     *     //se crea la variable a observar como privada
     *     //private variable con guión bajo
     *      encapsulamos la variable con BehaviorSubject() para
     *      suscribirse y notificar cambios.
     */

    private _shopList: Item[] = [];
    shopList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this._shopList);

    constructor(private productDataService: ProductsDataService) { }

    addItemToCart(item: Item):void {
      let product:Item |undefined = this._shopList.find(x => x.id == item.id);
      console.log("product en add item to cart "+product?.price);
      if(!product){
        this._shopList.unshift({...item});     //clona el item que se va a agregar a la lista. Permite modificar los valores de las variables al clonar
        console.log("product en add item to cart !product "+ item.price);
      }
      else{
        product.quantity += item.quantity;
        console.log("product en add item to cart else "+ item.price+" product "+ product.price);

      }
      this.shopList.next(this._shopList);     //Emite cambio con "next(variablePrivada)" se le indica al BehavourSubject que actualice el valor de la variable privada
    }

    deleteItemOfCart(item: Item):void{
      let stockToRestore : number = 0;
      let product = this._shopList.find(x => x.id == item.id);
    console.log("prodict id"+ product?.id);
      if(product){
        // Emitir el stock actualizado pero recibe el stock original no el valor del stock en bag-items
        product.stock -= item.quantity;
        stockToRestore = item.quantity;
        console.log(product.id +" product id y product sotck "+ product.stock);

        this._shopList = this._shopList.filter(x => x.id != item.id);
        this.shopList.next(this._shopList); //Emitir cambio
      }
      console.log("id "+item.id +   "item.stock "+ item.stock + " stock para reponer "+ stockToRestore);
      this.updateStock(item, stockToRestore);

    }


    updateStock(item: Item, stockToRestore: number):void{
      this.productDataService.updateStock(item, stockToRestore);
    }
}


/**
 * onsole.log("dentro de update en service "+ item.id+" stock "+ item.stock);
      let product = this._shopList.find(x => x.id === item.id);
      console.log()
      if(product){
        item.stock += stockToRestore;
        console.log("dentro if de update stock en service "+item.stock);
        this.shopList.next(this._shopList); //Emitir cambio
      }
      console.log("paso el if");
 */
