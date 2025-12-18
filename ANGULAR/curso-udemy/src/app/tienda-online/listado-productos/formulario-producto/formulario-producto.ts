import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductoModule } from '../../../producto/producto-module';
import { ActivatedRoute, Router } from '@angular/router';
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
  

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id'); // Obtiene el ID del parámetro de la ruta
    if (id) {
      this.productoId = +id; // Convierte el ID a número y lo asigna a la propiedad productoId
      const producto = this.productoService.obtenerProductoPorId(Number(id)); // Obtiene el producto por ID desde el servicio
      if (producto) {
        this.productoId = producto.id; // Asigna el ID del producto al input
        this.descripcionInput = producto.descripcion; // Asigna la descripción del producto al input
        this.precioInput = producto.precio; // Asigna el precio del producto al input
      }
    }
  }

  guardarProducto(event: Event) { // Método para agregar un nuevo producto

    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    if ( this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) { // Validación básica de entrada para precio negativo, no vacío y descripción no vacía
      
      return;
      alert(this.descripcionInput);
      alert(this.precioInput);
      alert("Debe ingresar una descripción y un precio válidos.");
    }

      this.productoService.guardarProducto(new ProductoModule(this.productoId,this.descripcionInput, this.precioInput)); // Agrega el nuevo producto al servicio
      this.limpiarFormulario();
      this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
    }

  cancelar() {
    this.limpiarFormulario();
    this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
  }

  eliminarProducto() { // Método para eliminar un producto
    if (this.productoId !== null) {
      const producto = this.productoService.eliminarProductoPorId(this.productoId); // Obtiene el producto por ID desde el servicio
      this.limpiarFormulario();
      this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos  
    }
  }

  limpiarFormulario() {
    this.productoId = null; // Limpia el campo de entrada de id
    this.descripcionInput = ''; // Limpia el campo de entrada de descripción
    this.precioInput = null; // Limpia el campo de entrada de precio
  }
}
