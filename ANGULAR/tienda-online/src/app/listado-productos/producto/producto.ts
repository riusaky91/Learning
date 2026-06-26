import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoService } from '../../servicios/productoService';
import { ProductModel } from '../../models/product.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [FormsModule],
  templateUrl: './producto.html',
  styleUrl: './producto.css',
})
export class Producto {

  constructor(private productoService: ProductoService, private router: Router) {
    this.productoService.detalleProducto.subscribe(detalle => { //Suscribo al evento detalleProducto del servicio ProductoService para recibir el detalle del producto seleccionado y mostrarlo en una alerta
      alert(`Detalle del producto:\nDescripción: ${detalle.descripcion}\nPrecio: ${detalle.precio}`);
    });
  }

  @Input() productos:  {[llave:string]: ProductModel} = {}; //Recibo la lista de productos desde el componente padre ListadoProductos utilizando el decorador @Input, inicializada como un objeto vacío con claves de tipo string y valores de tipo ProductModel

  obtenerLlaves(): string[] { 
    if(this.productos) { //Verifico que la lista de productos no sea null o undefined antes de obtener las claves
      return Object.keys(this.productos); //Obtengo las claves de la lista de productos utilizando Object.keys y las devuelvo como un array de strings
    } else {
      return []; //Si la lista de productos es null o undefined, devuelvo un array vacío para evitar errores al intentar obtener las claves
    } 
  }

  editarProducto(llave: string) {
    this.router.navigate(['/editar', llave ]); //Navego a la ruta del formulario de producto para editar el producto seleccionado
  }

}
