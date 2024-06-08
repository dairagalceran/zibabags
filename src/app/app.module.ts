import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';
import { BagItemsComponent } from './components/bag-items/bag-items.component';
import { AddItemComponent } from './components/add-item/add-item.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoCompraComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent,
    BagItemsComponent,
    AddItemComponent   // declarar todos los componentes a usar
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent] //root del componente
})
export class AppModule { }

//angular-cli lo hace por nosotros cuando creamos un componente nuevo
