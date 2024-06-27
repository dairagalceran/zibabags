import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, map, tap } from 'rxjs';
import { Item } from '../models/Item';
import { Server } from 'http';

const API_URL =  "https://666dbd1a7a3738f7cacd3117.mockapi.io/api/produtcs";

@Injectable({
  providedIn: 'root'
})

export class ProductsDataService {

  private _productList: Item[] = [];
  productList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this._productList);


  constructor(private http: HttpClient) {
    this.loadProducts();
  }

  loadProducts(): void{
    this.getAll().subscribe(products=>{
      this._productList = products;
      this.productList.next(this._productList);
    }), error => {
      console.error('Error al cargar la lista de productos', error);
    }
  }
  /**
   * consume la API zibabags
   * @returns observable de productos
   */
  public getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(API_URL) //se debe tipar que va a devolver el get porque el obseervable no puede anticipar que va a recibir
              .pipe(
                tap((productsItem:Item[]) => productsItem
                  .forEach(productsItem => productsItem.quantity = 0))
                );
  }


  public updateStock(item: Item, stockToRestore: number){
    let product = this._productList.find(product => product.id === item.id);
    if(product){
      product.stock += stockToRestore;
      this.productList.next(this._productList);
    }
  }

}
