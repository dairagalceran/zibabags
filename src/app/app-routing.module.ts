import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './components/categories/categories.component';
import { BagItemsComponent } from './components/bag-items/bag-items.component';
import { BagsLayoutComponent } from './components/bags-layout/bags-layout.component';
import { RucksacksLayoutComponent } from './components/rucksacks-layout/rucksacks-layout.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';

const routes: Routes = [

  {
    path:'',
    component: CategoriesComponent,
  },
  {
    path:'bolsas',
    component: BagsLayoutComponent,
  },
  {
    path:'mochilas',
    component: RucksacksLayoutComponent,
  },
  {
    path:'shopping-cart',
    component: ShoppingCartComponent,
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
