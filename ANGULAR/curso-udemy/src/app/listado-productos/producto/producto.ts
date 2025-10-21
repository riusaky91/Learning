import { Component } from '@angular/core';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {
  descripcion: string = 'Nuevo Producto'; // Título del producto
  precio: number = 99.99; // Precio del producto
}
