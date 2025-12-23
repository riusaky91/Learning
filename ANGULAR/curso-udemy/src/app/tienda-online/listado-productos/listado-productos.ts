import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { ProductoModule } from '../../producto/producto-module';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../services/producto-service';
import {  Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css'
})
export class ListadoProductos {

  productos: {[llave: string]: ProductoModule} = {}; // Objeto para almacenar la lista de productos (diccionario)
  productosSuscripcion: Subscription | null = null; // Suscripción para actualizaciones de productos

  constructor(private productoService: ProductoService,
    private route: Router
  ) {// Inyección del servicio de productos y del router
    
  } 

  ngOnInit() { // Método que se ejecuta al inicializar el componente
    this.cargarProductos(); // Carga los productos al iniciar el componente
    this.productoService.setProductos(this.productos); // Establece los productos en el servicio
    this.productosSuscripcion = this.productoService.productosActualizados.subscribe((productos: {[llave: string]: ProductoModule}) => {
      this.productos = productos; // Actualiza la lista de productos cuando hay cambios
    });
  }
  
  recibirNotificacion(nuevoProducto: ProductoModule) { // Método para recibir notificaciones de nuevos productos
    this.productoService.guardarProducto(nuevoProducto);  // Agrega el nuevo producto usando el servicio
  }

  
  cargarProductos() { // Método para cargar productos desde el servicio
    this.productoService.listarProductos().subscribe((productos: {[llave: string]: ProductoModule}) => {
      this.productos = productos; // Asigna la lista de productos al objeto local
      this.productoService.setProductos(this.productos);
    });
  }
  
  obternerLlaves(): string[] {
    if (this.productos) {
      return Object.keys(this.productos); // Devuelve un array con las llaves del objeto productos
    } else {
      return []; // Si no hay productos, devuelve un array vacío
    }
  }
  
  agregarProducto() { // Método para agregar un nuevo producto
  this.route.navigate(['agregar']); // agrega un nuevo producto navegando a la ruta 'agregar'
  }

  ngOnDestroy() { // Método que se ejecuta al destruir el componente
    if (this.productosSuscripcion) {
      this.productosSuscripcion.unsubscribe(); // Cancela la suscripción para evitar fugas de memoria
    }
  }
}
