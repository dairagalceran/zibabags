import { Injectable } from '@angular/core';
import { Item } from '../models/Item';
import { BehaviorSubject } from 'rxjs';

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
    shopList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>([]);
    product:Item;                                                     //  product variable del Service
    total:number=0;

    constructor() { }

    addItemToCart(item: Item) {
      let product = this._shopList.find(x => x.name == item.name);
      if(!product){
        this._shopList.unshift({...item});     //clona el item que se va a agregar a la lista. Permite modificar los valores de las variables al clonar
      }
      else{
        product.quantity += item.quantity;
      }
      this.shopList.next(this._shopList);     //Emite cambio con "next(variablePrivada)"
                                              //se le indica al BehavourSubject que actualice el valor de la variable privada
    }

    deleteItemOfCart(item: Item){
      let product = this._shopList.find(x => x.id == item.id);
      if(product){
        // Emitir el stock actualizado
        item.stock += item.quantity;
        this._shopList = this._shopList.filter(x => x.id != item.id);
        this.shopList.next(this._shopList); //Emitir cambio
      }

    }


}
