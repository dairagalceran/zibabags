import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';
import { HeaderComponent } from './components/header/header.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    CarritoCompraComponent,
    HeaderComponent,
    CategoriesComponent,
    FooterComponent   // declarar todos los componentes a usar
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
