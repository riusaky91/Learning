import { Component } from '@angular/core';
import { ListadoProductos } from "./listado-productos/listado-productos";

@Component({
  selector: 'app-tienda-online',
  imports: [ListadoProductos],
  templateUrl: './tienda-online.html',
  styleUrl: './tienda-online.css'
})
export class TiendaOnline {

}
