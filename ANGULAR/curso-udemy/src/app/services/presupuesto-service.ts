import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PresupuestoService {


  constructor() { }

  calcularPresupuesto(ingresos: number, egresos: number): number {
    return ingresos - egresos;
  }
  
}
