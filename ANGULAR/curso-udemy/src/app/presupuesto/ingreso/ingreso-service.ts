import { Injectable } from '@angular/core';
import { IngresoModel } from './ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  ingresos: IngresoModel [] = [
    new IngresoModel('Salario', 4000),
    new IngresoModel('Venta coche', 1500)
  ];
}
