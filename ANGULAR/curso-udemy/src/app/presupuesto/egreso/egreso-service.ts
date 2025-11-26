import { Injectable } from '@angular/core';
import { EgresoModel } from './egreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {
  egresos: EgresoModel [] = [
    new EgresoModel('Renta departamento', 900),
    new EgresoModel('Ropa', 400)
  ];
}
