import { Injectable } from '@angular/core';
import { IngresoModel } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  
  ingresos: IngresoModel [] = [ // Lista de ingresos inicial
    new IngresoModel('Salario', 4000), 
    new IngresoModel('Venta coche', 1500)
  ];

  eliminar(ingreso: IngresoModel) {
    const indice: number = this.ingresos.indexOf(ingreso); // Obtener el índice del ingreso a eliminar
    if (indice !== -1) {
      this.ingresos.splice(indice, 1); // Eliminar el ingreso de la lista si se encuentra
    }
  }
}
