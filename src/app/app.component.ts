import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //como vamos a incluir nuestro componente SIEMPRE usar prefijo propio como por ejemplo "app-"
  templateUrl: './app.component.html',  // el html que vamos a cargar a nuestro componente
  styleUrl: './app.component.scss'   // hojas de estilo de nuestro componente
})
export class AppComponent {
  title = 'ZIBA Bags';
}
