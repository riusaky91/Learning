import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {




  
  @Input() presupuestoTotal!: number;// Recibe el presupuesto total desde el componente padre
  @Input() ingresoTotal!: number; // Recibe el total de ingresos desde el componente padre
  @Input() egresoTotal!: number; // Recibe el total de egresos desde el componente padre
  @Input() porcentajeEgresos!: number; // Recibe el porcentaje de egresos desde el componente padre

  constructor( ) {
    
  }


}
