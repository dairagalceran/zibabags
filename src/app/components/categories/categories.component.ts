import { Component, OnInit } from '@angular/core';
import { Category } from '../../models/Category';
import { Observable } from 'rxjs';
import { CategoriesDataTsService } from '../../services/categories-data.ts.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit{

  categoriesList$ : Observable<Category[]>;

  constructor(private categoriesDataTsService: CategoriesDataTsService){}


  ngOnInit(): void {
    this.categoriesList$ = this.categoriesDataTsService.categoriesList.asObservable();

  }



}
