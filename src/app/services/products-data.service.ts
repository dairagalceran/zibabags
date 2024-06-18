import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map, tap } from 'rxjs';
import { Item } from '../models/Item';

const API_URL =  "https://666dbd1a7a3738f7cacd3117.mockapi.io/api/produtcs";

@Injectable({
  providedIn: 'root'
})

export class ProductsDataService {

  constructor(private http: HttpClient) { }

  /**
   * consume la API zibabags
   * @returns observable de productos
   */
  public getAll(): Observable<Item[]>{
            //fetch('url' , {method: 'GET'}) promesa
            //.then (devolvia una promesa)

    return this.http.get<Item[]>(API_URL) //se debe tipar que va a devolver el get porque el obseervable no puede anticipar que va a recibir
              .pipe(
                tap((productsItem:Item[]) => productsItem
                  .forEach(productsItem => productsItem.quantity = 0))
                );
  }                     // se emite para todos los componentes que esten subscriptos


}
