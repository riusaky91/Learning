import { Injectable } from '@angular/core';
import { EgresoModel } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos: EgresoModel [] = [ // Lista de egresos inicial
    new EgresoModel('Renta departamento', 900),
    new EgresoModel('Ropa', 400)
  ];

  eliminar(egreso: EgresoModel) {
      const indice: number = this.egresos.indexOf(egreso); // Obtener el índice del egreso a eliminar
      if (indice !== -1) {
        this.egresos.splice(indice, 1); // Eliminar el egreso de la lista si se encuentra
      }
    }
}
