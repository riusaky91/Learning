import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule, NgClass } from '@angular/common';
import { IngresoService } from '../ingreso/ingreso-service';
import { EgresoService } from '../egreso/egreso-service';
import { IngresoModel } from '../ingreso/ingreso.model';
import { EgresoModel } from '../egreso/egreso.model';

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

  descripcionInput: string | null = ''; // Descripción del presupuesto
  precioInput: number | null = 0; // Precio del presupuesto

  constructor( private ingresosService: IngresoService, private egresoService: EgresoService) {}

  agregarValor() { // Método para agregar un nuevo valor (ingreso o gasto)
    if (this.descripcionInput != null && this.precioInput != null) { // Verifica que los inputs no sean nulos
      if (this.tipo === 'ingresoOperacion') { // Si es un ingreso
        this.ingresosService.ingresos.push(new IngresoModel(this.descripcionInput, this.precioInput)); // Agrega un nuevo ingreso al servicio de ingresos
      } else {
        this.egresoService.egresos.push(new EgresoModel(this.descripcionInput, this.precioInput)); // Agrega un nuevo gasto al servicio de gastos
      }
    } else {
      // Aquí podrías mostrar un mensaje de error o manejar el caso de inputs nulos
      console.warn('Descripción o precio no pueden ser nulos');
    }

    // Resetea los campos de entrada después de agregar el valor

    this.descripcionInput = ''; // Resetea la descripción del input
    this.precioInput = 0; // Resetea el precio del input  

  }
}
