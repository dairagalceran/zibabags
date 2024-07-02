import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, forkJoin, map, tap } from 'rxjs';
import { Item } from '../models/Item';
import { Server } from 'http';

const API_URL =  "https://666dbd1a7a3738f7cacd3117.mockapi.io/api/produtcs";

@Injectable({
  providedIn: 'root'
})

export class ProductsDataService {

  private _productList: Item[] = []; //inicializa la lista de productos
  productList: BehaviorSubject<Item[]> = new BehaviorSubject<Item[]>(this._productList);


  constructor(private http: HttpClient) {
    this.loadProducts();  //puebla la lista de productos desde la API antes de que sea utilizada por updateStock()
  }


  // Método para cargar los productos utilizando getAll()
  loadProducts(): void{
    this.getAll().subscribe(products=>{
      this._productList = products;
      this.productList.next(this._productList);
    }), error => {
      console.error('Error al cargar la lista de productos', error);
    }
  }


  /**
   *   // Método para obtener todos los productos desde la API zibabags
   * y establecer la variable quantity =  0
   * @returns observable de productos
   */
  public getAll(): Observable<Item[]>{
    return this.http.get<Item[]>(API_URL) //se debe tipar que va a devolver el get porque el obseervable no puede anticipar que va a recibir
              .pipe(
                tap((productsItem:Item[]) => productsItem
                  .forEach(productsItem => productsItem.quantity = 0))
                );
  }

  public updateStockBeforePay(items: Item[]):Observable<Item[]>{
    const updateRequests = items.map(item =>{
      const updateItem = {
        ...item,
        stock: item.stock - item.quantity,
      };
      return this.http.put<Item>(`${API_URL}/${item.id}`, updateItem );
    });
    console.log("put");
    return forkJoin(updateRequests);
  }

    // Método para actualizar el stock del producto eliminado del carrito
    //busca el producto por su id en _productList
  public updateStock(item: Item, stockToRestore: number){
    let product = this._productList.find(product => product.id === item.id);
    if(product){
      product.stock += stockToRestore;
      this.productList.next(this._productList);
    }
  }


}
