import { Component, Input } from '@angular/core';
import { ProductoModule } from '../../producto/producto-module';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {

  @Input() producto!: ProductoModule; // Propiedad para recibir el mensaje del componente padre si esta vacia no muestra nada 

  precio: number = 99.99; // Precio del producto
}
