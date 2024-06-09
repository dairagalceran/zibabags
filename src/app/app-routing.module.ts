import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { BagItemsComponent } from './components/bag-items/bag-items.component';

const routes: Routes = [

  {
    path:'',
    component: CategoriesComponent,
  },
  {
    path:'bolsas',
    component: BagItemsComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
