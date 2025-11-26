import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto-service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  descripcionInput: string = '';
  precioInput: number = 0;

  constructor( private presupuestoService: PresupuestoService) { }  

  aumentarPresupuesto() { // Método para agregar un nuevo presupuesto
    if (this.descripcionInput.trim() === '' || this.precioInput <= 0) { // Validación básica de entrada
      alert("Debe ingresar una descripción y un precio válidos.");
      return;
    }
    this.presupuestoService.agregarPresupuesto(this.descripcionInput, this.precioInput);
    this.descripcionInput = '';
    this.precioInput = 0;
    this.presupuestoService.calcularIngresos(); // Actualiza los ingresos después de agregar un nuevo presupuesto
  }
}
