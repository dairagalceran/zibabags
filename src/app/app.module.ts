import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { BagItemsComponent } from './components/bag-items/bag-items.component';
import { BagsLayoutComponent } from './components/bags-layout/bags-layout.component';
import { RucksacksLayoutComponent } from './components/rucksacks-layout/rucksacks-layout.component';
import { RucksackItemsComponent } from './components/rucksack-items/rucksack-items.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';
import { CartComponent } from './components/cart/cart.component';
import { ShoppingCartComponent } from './components/shopping-cart/shopping-cart.component';
import { TotalByItemComponent } from './components/total-by-item/total-by-item.component';
import { HttpClientModule } from '@angular/common/http';
import { SuccessBuyComponent } from './components/success-buy/success-buy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    BagItemsComponent,
    BagsLayoutComponent,
    RucksacksLayoutComponent,
    RucksackItemsComponent,
    CartComponent,
    InputIntegerComponent,
    ShoppingCartComponent,
    TotalByItemComponent,
    SuccessBuyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent] //root del componente
})
export class AppModule { }

//angular-cli lo hace por nosotros cuando creamos un componente nuevo
