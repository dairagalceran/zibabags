import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { BagItemsComponent } from './components/bag-items/bag-items.component';
import { CartComponent } from './components/cart/cart.component';
import { BagsLayoutComponent } from './components/bags-layout/bags-layout.component';
import { RucksacksLayoutComponent } from './components/rucksacks-layout/rucksacks-layout.component';
import { RucksackItemsComponent } from './components/rucksack-items/rucksack-items.component';
import { InputIntegerComponent } from './components/input-integer/input-integer.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    BagItemsComponent,
    CartComponent,
    BagsLayoutComponent,
    RucksacksLayoutComponent,
    RucksackItemsComponent,
    InputIntegerComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent] //root del componente
})
export class AppModule { }

//angular-cli lo hace por nosotros cuando creamos un componente nuevo
