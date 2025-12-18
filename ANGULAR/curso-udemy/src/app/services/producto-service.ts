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


    guardarProducto(producto: ProductoModule) {
      if (!producto.id === null) { // Si el producto no tiene ID, es un nuevo producto
        producto.id = this.idSiguiente++; // Asigna un nuevo ID si no tiene uno
        this.productos.push(producto); // Agrega un nuevo producto a la lista
      } else {
        // Si el producto ya tiene un ID, actualiza el producto existente
        const index = this.productos.findIndex(p => p.id === producto.id);
        
        if (index !== -1) {
          this.productos[index] = producto;
  
        }
      }
    }

    obtenerProductos(): ProductoModule[] {
      return this.productos; // Devuelve la lista de productos
    }

    obtenerProductoPorId(id: number): ProductoModule | undefined { // Método para obtener un producto por su ID si no lo encuentra devuelve undefined
      return this.productos.find(producto => producto.id === id); // Busca y devuelve un producto por su ID
    }

    eliminarProductoPorId(id: number) { // Método para eliminar un producto por su ID
      const index = this.productos.findIndex(p => p.id === id); // Busca el índice del producto por su ID
      if (index !== -1) {
        const productoEliminado = this.productos.splice(index, 1)[0]; // Elimina el producto de la lista y lo devuelve
        return productoEliminado; // Devuelve el producto eliminado
      } else {
        return null; // Si no se encuentra el producto, devuelve null
      }

  }

}
