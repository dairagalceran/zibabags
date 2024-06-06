import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListadoGeneralComponent } from './listado-general/listado-general.component';
import { CarritoCompraComponent } from './carrito-compra/carrito-compra.component';

@NgModule({
  declarations: [
    AppComponent,
    ListadoGeneralComponent,
    CarritoCompraComponent   // declarar todos los componentes a usar
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
