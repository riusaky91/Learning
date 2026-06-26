import { Component } from '@angular/core';
import { Producto } from "./producto/producto";
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../servicios/productoService';
import { ProductModel } from '../models/product.model';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-listado-productos',
  imports: [Producto, FormsModule],
  templateUrl: './listado-productos.html',
  styleUrl: './listado-productos.css',
})
export class ListadoProductos {
  
  // productos: ProductModel[] = []; //Lista de productos que se mostrará en el componente, inicializada como un array vacío

  productos: {[llave:string]: ProductModel} = {}; //Lista de productos que se mostrará en el componente, inicializada como un objeto vacío con claves de tipo string y valores de tipo ProductModel
  productosSuscripcion: Subscription | null = null; //Suscripción al Subject productosActualizados del servicio ProductoService para recibir la lista actualizada de productos cuando se agregue, edite o elimine un producto en el servicio, inicializada como null para indicar que no hay una suscripción activa

  constructor(private productoService: ProductoService, //Inyecto el servicio ProductoService en el constructor para poder acceder a sus métodos y propiedades
    private router: Router //Inyecto el servicio Router en el constructor para poder navegar a otras rutas desde este componente
  ) {} 

  
  ngOnInit() {
    // this.productos = this.productoService.productos; //Inicializo la lista de productos con los productos del servicio
    this.cargarProductos(); //Llamo a la función para cargar los productos desde el servicio al iniciar el componente
    this.productosSuscripcion = this.productoService.productosActualizados.subscribe((productos: {[llave:string]: ProductModel}) => { //Me suscribo al Subject productosActualizados del servicio ProductoService para recibir la lista actualizada de productos cuando se agregue, edite o elimine un producto en el servicio, y asigno la lista actualizada a la variable productos para mostrarla en el componente
      this.productos = productos; //Asigno la lista actualizada de productos recibida del Subject productosActualizados del servicio ProductoService a la variable productos para mostrarla en el componente
    });

  }

  cargarProductos() {
    this.productoService.listarProductos().subscribe((productos: {[llave:string]: ProductModel}) => { //Llamo al método listarProductos del servicio para obtener la lista de productos desde la base de datos, y me suscribo al Observable que devuelve para manejar la respuesta asíncrona
      this.productos = productos; //Asigno la lista de productos obtenida del servicio a la variable productos para mostrarla en el componente
      this.productoService.setProductos(productos); //Llamo al método setProductos del servicio para actualizar la lista de productos en el servicio con la lista obtenida de la base de datos, lo que permite que los demás componentes que estén suscritos al Subject productosActualizados del servicio ProductoService reciban la lista actualizada de productos y se actualicen automáticamente
    });
  }

  //Función para manejar el evento de producto agregado desde el formulario
  manejarProductoAgregado(producto: ProductModel) {
    this.productoService.guardarProducto(producto); //Llamo al método agregarProducto del servicio para agregar el nuevo producto a la lista de productos
  }

  agregarProducto() {
    this.router.navigate(['/agregar']); //Navego a la ruta del formulario de producto para agregar un nuevo producto
  }

  ngOnDestroy() {
    if (this.productosSuscripcion != null) { //Verifico que exista una suscripción activa antes de intentar desuscribirme para evitar errores, y me desuscribo del Subject productosActualizados del servicio ProductoService para evitar fugas de memoria cuando el componente se destruya
      this.productosSuscripcion.unsubscribe(); //Me desuscribo del Subject productosActualizados del servicio ProductoService para evitar fugas de memoria cuando el componente se destruya
    }   
  }
  
}
