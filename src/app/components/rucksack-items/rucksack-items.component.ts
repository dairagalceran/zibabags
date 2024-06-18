import { Component } from '@angular/core';
import { Item } from '../../models/Item';
import { CartService } from '../../services/cart.service';
import { ProductsDataService } from '../../services/products-data.service';

@Component({
  selector: 'app-rucksack-items',
  templateUrl: './rucksack-items.component.html',
  styleUrls: ['./rucksack-items.component.scss']
})

export class RucksackItemsComponent {

  productItems: Item[] = [];


  constructor(
    private cartService: CartService,
    private productsDataService: ProductsDataService){
  }

  //ciclo de vida que se disparan cuando el componente
  //aparece en pantalla o se va o hay cambios

  ngOnInit():void {
    this.productsDataService.getAll()
        .subscribe(productsData => this.productItems = productsData);
                      //se puede siempre obtener el valor que está
                      //emitiendo con una función arrow
                      //DESUBSCRIBIR para no ocupar memoria
  }

  addItemToCart(item: Item){
    if(item.quantity>0){
      this.cartService.addItemToCart(item);
    }
    item.stock -= item.quantity;
    item.quantity = 0;
  }



}
