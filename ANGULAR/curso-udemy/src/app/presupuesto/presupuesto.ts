import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cabecera } from "./cabecera/cabecera";
import { Formulario } from './formulario/formulario';
import { Ingreso } from './ingreso/ingreso';
import { Egreso } from './egreso/egreso';
import { IngresoService } from './ingreso/ingreso-service';
import { EgresoService } from './egreso/egreso-service';
import { IngresoModel } from './ingreso/ingreso.model';
import { EgresoModel } from './egreso/egreso.model';

@Component({
  selector: 'app-presupuesto',
  imports: [CommonModule, Cabecera, Formulario, Ingreso, Egreso],
  templateUrl: './presupuesto.html',
  styleUrl: './presupuesto.css'
})
export class Presupuesto {


  ingreso: IngresoModel[] = []; // Lista de ingresos del modelo 
  egreso: EgresoModel[] = [];  // Lista de egresos del modelo

  constructor( private ingresoService: IngresoService, private egresoService: EgresoService) {
    
    this.ingreso = ingresoService.ingresos; // Asignar la lista de ingresos desde el servicio
    this.egreso = egresoService.egresos; // Asignar la lista de egresos desde el servicio
  }

  getIngresosTotal() { // Metodo para obtener el total de ingresos
    let ingresosTotal: number = 0;  
    this.ingreso.forEach(ingreso => {
      ingresosTotal += ingreso.valor; // Sumar el valor de cada ingreso       
    });
    return ingresosTotal;
  }   
  getEgresosTotal() { // Metodo para obtener el total de egresos
    let egresosTotal: number = 0; 
    this.egreso.forEach(egreso => { 
      egresosTotal += egreso.valor; // Sumar el valor de cada egreso        
    });
    return egresosTotal;
  } 

  getPorcentajeEgresos() { // Metodo para obtener el porcentaje de egresos
    return this.getEgresosTotal() / this.getIngresosTotal(); // Calcular el porcentaje de egresos respecto a los ingresos
  }

  getPresupuestoDisponible() { // Metodo para obtener el presupuesto disponible
    return this.getIngresosTotal() - this.getEgresosTotal(); // Calcular el presupuesto disponible restando egresos a ingresos
  }
    
}
