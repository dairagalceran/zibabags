import { Injectable } from '@angular/core';
import { Category } from '../models/Category';
import { BehaviorSubject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL_CAT =  "https://666dbd1a7a3738f7cacd3117.mockapi.io/api/categories";

@Injectable({
  providedIn: 'root'
})
export class CategoriesDataTsService {

  private _categoriesList: Category[] = [];
  categoriesList: BehaviorSubject<Category[]> = new BehaviorSubject<Category[]>(this._categoriesList);

  constructor(private http: HttpClient) {
    this.loadCategories();
  }


  loadCategories(): void {
    this.getAllCategories().subscribe(categories => {
      this._categoriesList = categories;
      this.categoriesList.next(this._categoriesList);
    });
  }

  getAllCategories(){
    return this.http.get<Category[]>(API_URL_CAT);
  }

}
