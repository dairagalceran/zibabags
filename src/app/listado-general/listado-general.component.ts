import { Component } from '@angular/core';

@Component({
  selector: 'app-listado-general',
  templateUrl: './listado-general.component.html',
  styleUrl: './listado-general.component.scss'
})
export class ListadoGeneralComponent {

  categoria = {
    "name": "Bolsa reutilizable",
    "price": 4000,
    "stock": 3,
    "image": "assets/img/bolsa.png"
  }

}
