import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModule } from '../producto/producto-module';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  productos: ProductoModule[] = [ // Lista de productos definida usando ProductoModule
      new ProductoModule('Producto 1', 10.99),
      new ProductoModule('Producto 2', 19.99),
      new ProductoModule('Producto 3', 5.49),
      new ProductoModule('Producto 4', 15.00)
    ];

    detallleProductoEmiter = new EventEmitter<ProductoModule>(); // Emisor de eventos para detalles de producto


    agregarProducto(producto: ProductoModule) {
      this.productos.push(producto); // Agrega un nuevo producto a la lista
    }

    obtenerProductos(): ProductoModule[] {
      return this.productos; // Devuelve la lista de productos
    }


}
