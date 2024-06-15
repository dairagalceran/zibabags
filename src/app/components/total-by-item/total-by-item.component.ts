import { Component, Input } from '@angular/core';
import { Item } from '../../models/Item';

@Component({
  selector: 'app-total-by-item',
  templateUrl: './total-by-item.component.html',
  styleUrls: ['./total-by-item.component.scss']
})
export class TotalByItemComponent {

  @Input() quantity: number = 0;
  @Input() price:number =0;
}
