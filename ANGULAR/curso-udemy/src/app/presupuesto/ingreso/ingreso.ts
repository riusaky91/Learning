import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IngresoService } from './ingreso-service';
import { IngresoModel } from './ingreso.model';

@Component({
  selector: 'app-ingreso',
  imports: [CommonModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css'
})
export class Ingreso {

  
  ingresos: IngresoModel[] = [];// Lista de ingresos vacia

  constructor(private ingresoService: IngresoService) {
    this.ingresos = ingresoService.ingresos; // Asignar la lista de ingresos desde el servicio
  }

  eliminarIngreso(ingreso: IngresoModel) {
    this.ingresoService.eliminar(ingreso); // Llamar al método eliminar del servicio para eliminar el ingreso
  }
  
}
