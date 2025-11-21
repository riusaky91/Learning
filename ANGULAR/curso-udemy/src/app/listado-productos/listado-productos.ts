import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { ProductoModule } from '../producto/producto-module';
import { FormsModule } from '@angular/forms';
import { FormularioProducto } from "./formulario-producto/formulario-producto";
import { ProductoService } from '../services/producto-service';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule, FormularioProducto],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: ProductoModule[] = []; // Lista de productos

  constructor(private productoService: ProductoService) {
    this.productoService.detallleProductoEmiter.subscribe((producto: ProductoModule) => { // Suscripción al emisor de eventos para detalles de producto
      alert(`Detalle del producto:\nDescripción: ${producto.descripcion}\nPrecio: $${producto.precio}`);
    });
  } 

  ngOnInit() {
    this.productos = this.productoService.obtenerProductos(); // Obtiene la lista de productos del servicio al inicializar el componente
  }
  
  recibirNotificacion(nuevoProducto: ProductoModule) {
    this.productoService.agregarProducto(nuevoProducto);  // Agrega el nuevo producto usando el servicio
  }

}
