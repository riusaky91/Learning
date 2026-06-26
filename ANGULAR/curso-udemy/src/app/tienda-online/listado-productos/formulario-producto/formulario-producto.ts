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

  llaveProducto: string = ''; // Propiedad para almacenar la llave del producto
  descripcionInput: string = ''; // Nueva propiedad para el binding del input de descripción
  precioInput: number | null = null; // Nueva propiedad para el binding del input de precio puede ser null o number
  

  constructor(private productoService: ProductoService, private router: Router, private route: ActivatedRoute) {
    
  }

  ngOnInit() {
    const llave = this.route.snapshot.paramMap.get('llave'); // Obtiene la llave del producto desde la ruta
    
    if (llave) {
      const producto = this.productoService.obtenerProductoPorLlave(llave); // Obtiene el producto por su llave desde el servicio
      
      if (producto) {
        this.llaveProducto = llave; // Asigna la llave del producto a la propiedad
        this.descripcionInput = producto.descripcion; // Asigna la descripción del producto al input
        this.precioInput = producto.precio; // Asigna el precio del producto al input
      }
    }
  }

  guardarProducto(event: Event) { // Método para agregar un nuevo producto

    event.preventDefault(); // Evita el comportamiento por defecto del formulario
    
    if ( this.descripcionInput.trim() === '' || this.precioInput === null || this.precioInput <= 0) { // Validación básica de entrada para precio negativo, no vacío y descripción no vacía
      
      
      console.log("Debe ingresar una descripción y un precio válidos.");
      
      return;
    }
    console.log(this.descripcionInput, this.precioInput, this.llaveProducto);
    this.productoService.guardarProducto(new ProductoModule(this.descripcionInput, this.precioInput), this.llaveProducto); // Agrega el nuevo producto al servicio
    this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
    this.limpiarFormulario();
  }

  cancelar() {
    this.limpiarFormulario();
    this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos
  }

  eliminarProducto() { // Método para eliminar un producto
    if (this.llaveProducto !== null) { // Verifica que la llave del producto no sea nula
      this.productoService.eliminarProductoPorLlave(this.llaveProducto); // Obtiene la llave del producto desde la propiedad
      this.limpiarFormulario();
      this.router.navigate(['/listadoProductos']); // Navega de vuelta al listado de productos  
    }
  }

  limpiarFormulario() {
    this.llaveProducto = ''; // Limpia el campo de entrada de id
    this.descripcionInput = ''; // Limpia el campo de entrada de descripción
    this.precioInput = null; // Limpia el campo de entrada de precio
  }
}
