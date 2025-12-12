import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoModule } from '../../../producto/producto-module';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css'
})
export class FormularioProducto {
  descripcionInput: string = ''; // Nueva propiedad para el binding del input de descripción
  precioInput: number | null = null; // Nueva propiedad para el binding del input de precio puede ser null o number
  
  @Output() notificarAlPadre = new EventEmitter<ProductoModule>(); // Evento para notificar al componente padre

  guardarProducto(event: Event) { // Método para agregar un nuevo producto

    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    if (this.descripcionInput.trim() === '' || this.precioInput == null || this.precioInput <= 0) { // Validación básica de entrada para precio negativo, no vacío y descripción no vacía
      alert("Debe ingresar una descripción y un precio válidos.");
      return;
    }
    
      this.notificarAlPadre.emit(new ProductoModule(this.descripcionInput, this.precioInput!)); // Notifica al componente padre con el nuevo producto
      this.descripcionInput = ''; // Limpia el campo de entrada de descripción
      this.precioInput = null; // Limpia el campo de entrada de precio
    }
}
