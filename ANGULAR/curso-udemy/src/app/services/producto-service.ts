import { EventEmitter, Injectable } from '@angular/core';
import { ProductoModule } from '../producto/producto-module';
import { DatosService } from './datos-service';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductoService {
  
  productos: {[llave: string]: ProductoModule} = {}; // Objeto para almacenar la lista de productos (diccionario)
  productosActualizados = new Subject<{[llave: string]: ProductoModule}>(); // Sujeto para notificar actualizaciones en la lista de productos  

  constructor(private datosService: DatosService) {
   }

   listarProductos() {
    return this.datosService.listarProductos();
   }

    detallleProductoEmiter = new EventEmitter<ProductoModule>(); // Emisor de eventos para detalles de producto


    guardarProducto(producto: ProductoModule, llave: string | null = null) {
      if(llave === '') {
        console.log("Guardando producto en el servicio:",  llave);
        // Agregar nuevo producto
        this.datosService.guardarProducto(producto).subscribe(() => {
          // Aquí puedes manejar la respuesta si es necesario
          console.log(`Producto guardado con éxito: Descripcion: ${producto.descripcion} y Precio: ${producto.precio}`);
          this.refrescarProductos();
        });

      } else {
        console.log("Actualizando producto en el servicio:",  llave);
        // Actualizar producto existente
        this.datosService.modificarProducto(producto, llave as string).subscribe(() => { // Suscripción para manejar la respuesta
          // Aquí puedes manejar la respuesta si es necesario
          console.log(`Producto actualizado con éxito: Descripcion: ${producto.descripcion} y Precio: ${producto.precio}`);
          this.refrescarProductos();
        }); 
      }
    }

    private refrescarProductos() {// Método para refrescar la lista de productos desde el servicio de datos
      this.listarProductos().subscribe(( productos: {[llave: string]: ProductoModule} ) => {
        this.setProductos(productos);
      }); 
    }

    setProductos(productos: {[llave: string]: ProductoModule}) { // Método para establecer la lista de productos
      this.productos = productos;
      //alert("Productos actualizados en el servicio: " + JSON.stringify(this.productos));
      this.productosActualizados.next(this.productos); // Notifica a los suscriptores sobre la actualización de productos
    }

    obtenerProductoPorLlave(llave: string): ProductoModule{ // Método para obtener un producto por su ID si no lo encuentra devuelve undefined
      return this.productos[llave]; // Retorna el producto correspondiente a la llave proporcionada
    }

    eliminarProductoPorLlave(llave: string) { // Método para eliminar un producto por su ID
      this.datosService.eliminarProducto(llave).subscribe(() => {
        console.log(`Producto con llave ${llave} eliminado con éxito.`);
        this.refrescarProductos();
      });

  }

}
