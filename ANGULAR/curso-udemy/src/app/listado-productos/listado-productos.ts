import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { ProductoModule } from '../producto/producto-module';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from "./formulario-producto/formulario-producto";

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule, FormularioProducto],
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
  
  recibirNotificacion(producto: ProductoModule) { // Método para recibir notificación del componente hijo
    this.productos.push(producto); // Agrega el nuevo producto a la lista
  }


}
