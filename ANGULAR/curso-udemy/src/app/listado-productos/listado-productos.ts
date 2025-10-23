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
  productos: ProductoModule[] = [ // Lista de productos definida usando ProductoModule
    new ProductoModule('Producto 1', 10.99),
    new ProductoModule('Producto 2', 19.99),
    new ProductoModule('Producto 3', 5.49),
    new ProductoModule('Producto 4', 15.00)
  ];

  agregarProducto(descripcion: string , precio: GLfloat ) { // Método para agregar un nuevo producto
    if (descripcion.trim() && precio && precio > 0) { // Validación básica de entrada para precio positivo, no vacío y descripción no vacía
      this.productos.push(new ProductoModule(descripcion, precio)); // Agrega el nuevo producto a la lista
    }  else {
      alert("Debe ingresar una descripción y un precio válidos.");
    }
  }

}
