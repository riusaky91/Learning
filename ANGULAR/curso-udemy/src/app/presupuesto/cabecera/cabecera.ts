import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { PresupuestoService } from '../../services/presupuesto-service';

@Component({
  selector: 'app-cabecera',
  imports: [CommonModule],
  templateUrl: './cabecera.html',
  styleUrl: './cabecera.css'
})
export class Cabecera {

  ingresos: number = 5000.00;
  egresos: number = 1600.00;

  presupuestoDisponible: number = 0;
  

  constructor( private presupuestoService: PresupuestoService) {
    
  }

  ngOnInit() {
    this.presupuestoDisponible = this.presupuestoService.calcularPresupuesto(this.ingresos, this.egresos);
  }
}
