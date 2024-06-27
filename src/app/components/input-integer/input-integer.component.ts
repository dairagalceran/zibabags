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


  changeQuantity($event): void {
    const newQuantity = parseInt($event.target.value, 10);
    if (newQuantity < 0 || isNaN(newQuantity)) {
      this.quantity = 0;
    } else if (newQuantity > this.maxQuantity) {
      this.quantity = this.maxQuantity;
    } else {
      this.quantity = newQuantity;
    }
    this.quantityChange.emit(this.quantity);
  }
}


