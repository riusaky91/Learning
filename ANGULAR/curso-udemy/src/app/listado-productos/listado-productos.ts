import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { ProductoModule } from '../producto/producto-module';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productoInput: string = ''; // Nueva propiedad para el binding del input de descripción
  precioInput: number | null = null; // Nueva propiedad para el binding del input de precio puede ser null o number


  productos: ProductoModule[] = [ // Lista de productos definida usando ProductoModule
    new ProductoModule('Producto 1', 10.99),
    new ProductoModule('Producto 2', 19.99),
    new ProductoModule('Producto 3', 5.49),
    new ProductoModule('Producto 4', 15.00)
  ];

  agregarProducto() { // Método para agregar un nuevo producto
    if (this.productoInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) { // Validación básica de entrada para precio negativo, no vacío y descripción no vacía
      alert("Debe ingresar una descripción y un precio válidos.");
      return;
    }
    
    this.productos.push(new ProductoModule(this.productoInput, this.precioInput)); // Agrega el nuevo producto a la lista
    this.productoInput = ''; // Limpia el campo de entrada de descripción
    this.precioInput = null; // Limpia el campo de entrada de precio
  }

}
