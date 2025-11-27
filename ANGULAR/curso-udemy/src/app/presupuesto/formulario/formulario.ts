import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto-service';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule, NgClass, CommonModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {

  tipo: string = 'ingresoOperacion'; // Tipo de operación (ingreso o gasto)

  tipoOperacion(event: any) { // Maneja el cambio en el tipo de operación
    const target = event.target as HTMLSelectElement; // Asegura que el target es un HTMLSelectElement
    this.tipo = target.value; // Actualiza el tipo de operación basado en la selección del usuario
  }

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
