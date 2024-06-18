import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-input-integer',
  templateUrl: './input-integer.component.html',
  styleUrls: ['./input-integer.component.scss']
})
export class InputIntegerComponent {


  @Input()
  quantity: number = 0;

  @Input()
  maxQuantity: number;

  @Output()
  quantityChange: EventEmitter<number> = new EventEmitter<number>(); //two-way-data binding


  increaseQuantity(): void{
    if(this.maxQuantity> this.quantity){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
  }

  decreseQuantity(): void{
    if(this.quantity>0 || this.maxQuantity<this.quantity){
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  }

  changeQuantity(event): void {
    if(event.keyCode >= 48 && event.keyCode <= 57 || event.keyCode ==8 ){
      if(this.maxQuantity>= this.quantity){
        this.quantityChange.emit(this.quantity);
      }else{
          this.quantity=0;
        }
    }else{
      console.log("Solo números");
      this.quantity=0;

    }
  }
}


