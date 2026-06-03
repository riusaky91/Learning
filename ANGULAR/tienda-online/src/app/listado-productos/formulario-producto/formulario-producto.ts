import { Component, Output, EventEmitter } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../models/product.model';
import { ProductoService } from '../../servicios/productoService';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-formulario-producto',
  imports: [FormsModule],
  templateUrl: './formulario-producto.html',
  styleUrl: './formulario-producto.css',
})
export class FormularioProducto {

  llaveProducto: string | null = null; // Variable para almacenar el ID del producto a editar
  producto: ProductModel = { descripcion: '', precio: 0 }; // Modelo enlazado al formulario

  constructor(private productoService: ProductoService,
    private router: Router,
    private route: ActivatedRoute
  ) {} // Inyecto el servicio ProductoService en el constructor para poder acceder a sus métodos y propiedades

  ngOnInit(){
    const llave = this.route.snapshot.paramMap.get('llave'); // Obtengo el ID del producto a editar desde los parámetros de la ruta
    if (llave) { // Si el ID existe, obtengo el producto a editar desde el servicio ProductoService utilizando el ID obtenido de los parámetros de la ruta, y asigno su modelo al formulario para que se muestre al usuario
      const producto = this.productoService.getProductoPorLlave(llave); // Obtengo el producto a editar desde el servicio ProductoService utilizando el ID obtenido de los parámetros de la ruta
      if (producto) { // Si el producto existe, asigno su modelo al formulario para que se muestre al usuario
        this.llaveProducto = llave; // Asigno el ID del producto a la variable llaveProducto para indicar que se está editando un producto existente
        this.producto = { ...producto };// Asigno el modelo del producto a la variable producto para mostrarlo en el formulario, utilizando el operador spread para crear una copia del producto y evitar modificar el producto original en el servicio ProductoService
      } else {
        alert('Producto no encontrado.'); // Muestro una alerta si el producto no se encuentra en el servicio ProductoService
        this.router.navigate(['/listado-productos']); // Navego a la página de listado de productos si el producto no se encuentra
      }
    }
  }

  @Output() productoAgregado = new EventEmitter<ProductModel>(); // Evento para emitir el nuevo producto agregado

  guardarProducto() {
    const nuevoProducto: ProductModel = { ...this.producto }; // Creo un nuevo producto a partir del modelo enlazado al formulario, utilizando el operador spread para crear una copia del producto y evitar modificar el producto original en el servicio ProductoService
    if (!nuevoProducto.descripcion || isNaN(nuevoProducto.precio)) { // Valido que la descripcion no esté vacía y que el precio sea un número válido
      alert('Por favor, ingresa una descripción y un precio válido.'); // Muestro una alerta si la validación falla
      this.limpiarFormulario(); // Limpio el formulario para que el usuario pueda ingresar un nuevo producto después de que la validación falle
      return; // Salgo de la función sin agregar el producto
    }
    this.productoAgregado.emit(nuevoProducto); // Emito el nuevo producto agregado
    this.productoService.guardarProducto(nuevoProducto, this.llaveProducto); // Agrego el nuevo producto al servicio para que se refleje en la lista de productos
    
    
    this.limpiarFormulario(); // Limpio el formulario después de agregar el producto para que el usuario pueda ingresar un nuevo producto si lo desea, o para limpiar los campos después de editar un producto existente

    // redirigir al inicio o a la página de listado de productos
    this.router.navigate(['/listado-productos']);
  }

  cancelar() {
    //redirigir al inicio o a la página de listado de productos
    this.router.navigate(['/listado-productos']);
  }


  eliminarProducto() {
    if (this.llaveProducto) { // Verifico que exista un producto seleccionado para eliminar
      this.productoService.eliminarProducto(this.llaveProducto); // Llamo al método eliminarProducto del servicio ProductoService para eliminar el producto seleccionado utilizando su ID almacenado en la variable llaveProducto
      this.limpiarFormulario(); // Limpio el formulario después de eliminar el producto para que el usuario pueda ingresar un nuevo producto si lo desea, o para limpiar los campos después de eliminar un producto existente
      this.router.navigate(['/listado-productos']); // Redirijo a la página de listado de productos después de eliminar el producto
    } else {
      alert('No se ha seleccionado ningún producto para eliminar.'); // Muestro una alerta si no se ha seleccionado ningún producto para eliminar
    } 
  }

  limpiarFormulario() {
    this.llaveProducto = null; // Limpio la variable llaveProducto para indicar que se está agregando un nuevo producto en lugar de editar un producto existente
    this.producto = { descripcion: '', precio: 0 }; // Limpio el modelo del formulario para que los campos se vacíen y el usuario pueda ingresar un nuevo producto
  }

}
