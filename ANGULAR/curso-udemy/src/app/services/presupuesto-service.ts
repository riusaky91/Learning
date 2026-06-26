import { Injectable } from '@angular/core';
import { PresupuestoModule } from '../modulos/presupuesto-module';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {


  presupuetoArreglo: PresupuestoModule[] = [
    new PresupuestoModule('Salario', 4000.00),
    new PresupuestoModule('Venta coche', 1000.00),
  ];

  constructor() { }

  calcularPresupuesto(ingresos: number, egresos: number): number {
    return ingresos - egresos;
  }

  calcularIngresos(): number {
    let totalIngresos = 0;
    for (let ingreso of this.presupuetoArreglo) {
      // Lógica para calcular ingresos
      totalIngresos += ingreso.precio;
    } 
    return totalIngresos;
  }

  agregarPresupuesto(descripcion: string, precio: number): void {
    const nuevoPresupuesto = new PresupuestoModule(descripcion, precio);
    this.presupuetoArreglo.push(nuevoPresupuesto);
  }
  
}
