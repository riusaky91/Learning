import { Component, Input } from '@angular/core';
import { ProductoModule } from '../../producto/producto-module';
import { ProductoService } from '../../services/producto-service';

@Component({
  selector: 'app-producto',
  imports: [],
  templateUrl: './producto.html',
  styleUrl: './producto.css'
})
export class Producto {

  constructor(private prodductoService: ProductoService) { }
  @Input() producto!: ProductoModule; // Propiedad para recibir el mensaje del componente padre si esta vacia no muestra nada 

  precio: number = 99.99; // Precio del producto

  emitirDetalleProducto() {
    // Lógica para emitir el detalle del producto
    this.prodductoService.detallleProductoEmiter.emit(this.producto); // Emite el evento con el detalle del producto
  }
}
