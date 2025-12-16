import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoModule } from '../../../producto/producto-module';
import { Router } from '@angular/router';
import { ProductoService } from '../../../services/producto-service';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {
  productoId: number | null = null; // Nueva propiedad para el binding del input de id
  descripcionInput: string = ''; // Nueva propiedad para el binding del input de descripción
  precioInput: number | null = null; // Nueva propiedad para el binding del input de precio puede ser null o number
  

  constructor(private productoService: ProductoService, private router: Router) {}

  ngOninit() {
    
  }

  guardarProducto(event: Event) { // Método para agregar un nuevo producto

    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    if ( this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) { // Validación básica de entrada para precio negativo, no vacío y descripción no vacía
      
      return;
      alert(this.descripcionInput);
      alert(this.precioInput);
      alert("Debe ingresar una descripción y un precio válidos.");
    }

      this.productoService.agregarProducto(new ProductoModule(this.productoId,this.descripcionInput, this.precioInput)); // Agrega el nuevo producto al servicio
      this.descripcionInput = ''; // Limpia el campo de entrada de descripción
      this.precioInput = null; // Limpia el campo de entrada de precio
      this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
    }

  cancelar() {
    this.descripcionInput = ''; // Limpia el campo de entrada de descripción
    this.precioInput = null; // Limpia el campo de entrada de precio
    this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
  }
}
