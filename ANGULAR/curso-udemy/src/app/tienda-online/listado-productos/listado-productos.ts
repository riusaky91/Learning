import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { ProductoModule } from '../../producto/producto-module';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto-service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: ProductoModule[] = []; // Lista de productos

  constructor(private productoService: ProductoService,
    private route: Router
  ) {// Inyección del servicio de productos y del router
    
  } 

  ngOnInit() { // Método que se ejecuta al inicializar el componente
    this.productos = this.productoService.obtenerProductos(); // Obtiene la lista de productos del servicio al inicializar el componente
    this.productoService.detallleProductoEmiter.subscribe((producto: ProductoModule) => { // Suscripción al emisor de eventos para detalles de producto
      alert(`Detalle del producto:\nDescripción: ${producto.descripcion}\nPrecio: $${producto.precio}`); // Muestra una alerta con los detalles del producto
    });
  }
  
  recibirNotificacion(nuevoProducto: ProductoModule) { // Método para recibir notificaciones de nuevos productos
    this.productoService.agregarProducto(nuevoProducto);  // Agrega el nuevo producto usando el servicio
  }

  agregarProducto() { // Método para agregar un nuevo producto
    this.route.navigate(['agregar']); // agrega un nuevo producto navegando a la ruta 'agregar'
  }

}
