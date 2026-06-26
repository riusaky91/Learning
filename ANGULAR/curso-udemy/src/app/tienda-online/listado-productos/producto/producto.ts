import { Component, Input } from '@angular/core';
import { ProductoModule } from '../../../producto/producto-module';
import { ProductoService } from '../../../services/producto-service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {

  constructor(private router: Router) { } // Inyección del servicio de productos
  @Input() producto!: ProductoModule; // Propiedad para recibir el mensaje del componente padre si esta vacia no muestra nada 
  @Input() llave!: string; // Propiedad para recibir la llave del producto

  precio: number = 99.99; // Precio del producto

  editarProducto() {
    this.router.navigate(['/editar', this.llave]); // Navega a la ruta de edición del producto con la llave del producto
  }
}
