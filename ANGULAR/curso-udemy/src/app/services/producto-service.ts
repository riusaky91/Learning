import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModule } from '../producto/producto-module';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private idSiguiente: number = 1; // ID para el siguiente producto
  
  productos: ProductoModule[] = []; // Lista de productos

  constructor() {
    this.inicializarProductos();
   }

  private inicializarProductos() { // Método para inicializar algunos productos de ejemplo
    const producto1 = new ProductoModule(this.idSiguiente++, 'Camisa', 29.99);
    const producto2 = new ProductoModule(this.idSiguiente++, 'Pantalones', 49.99);
    const producto3 = new ProductoModule(this.idSiguiente++, 'Zapatos', 79.99);
    this.productos.push(producto1, producto2, producto3); //Agrega los productos a la lista 
  }


    detallleProductoEmiter = new EventEmitter<ProductoModule>(); // Emisor de eventos para detalles de producto


    agregarProducto(producto: ProductoModule) {
      this.productos.push(producto); // Agrega un nuevo producto a la lista
    }

    obtenerProductos(): ProductoModule[] {
      return this.productos; // Devuelve la lista de productos
    }


}
