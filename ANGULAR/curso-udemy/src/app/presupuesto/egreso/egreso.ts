import { Component, Input } from '@angular/core';
import { EgresoModel } from './egreso.model';
import { EgresoService } from './egreso-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-egreso',
  imports: [CommonModule],
  templateUrl: './egreso.html',
  styleUrl: './egreso.css'
})
export class Egreso {

  egresos: EgresoModel[] = [];// Lista de ingresos vacia

  @Input() ingresoTotal!: number; // Propiedad para recibir el total de ingresos desde el componente padre
  
    constructor(private egresoService: EgresoService) {
      this.egresos = egresoService.egresos; // Asignar la lista de ingresos desde el servicio
    }
  
    eliminarEgreso(egreso: EgresoModel) {
      this.egresoService.eliminar(egreso); // Llamar al método eliminar del servicio para eliminar el ingreso
    }

    calcularPorcentaje(egresoValor: number): number {
      if (this.ingresoTotal === 0) {
        return 0; // Evitar división por cero
      } else {
        return (egresoValor / this.ingresoTotal) * 100; // Calcular el porcentaje del egreso respecto al total de ingresos
      }   
    }

}
