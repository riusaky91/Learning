import { Component } from '@angular/core';
import { PresupuestoModule } from '../../modulos/presupuesto-module';
import { PresupuestoService } from '../../services/presupuesto-service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-ingreso',
  imports: [CommonModule],
  templateUrl: './ingreso.html',
  styleUrl: './ingreso.css'
})
export class Ingreso {

  presupuestos: PresupuestoModule[] = [];
  
  constructor(private presupuestoService: PresupuestoService
  
     
  ) {}
  
  ngOnInit() {
    this.presupuestos = this.presupuestoService.presupuetoArreglo;
  }
  
  
}
