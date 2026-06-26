import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-pipes',
  imports: [CommonModule],
  templateUrl: './ejemplo-pipes.html',
  styleUrl: './ejemplo-pipes.css'
})
export class EjemploPipes {
  empleados = [
    { nombre: 'Juan', salario: 2500.5, fechaNacimiento: new Date(1990, 5, 15) , edad: 33},
    { nombre: 'María', salario: 3200, fechaNacimiento: new Date(1985, 10, 30) , edad: 38},
    { nombre: 'Pedro', salario: 2800.75, fechaNacimiento: new Date(1992, 3, 22) , edad: 31},
    { nombre: 'Ana', salario: 4000, fechaNacimiento: new Date(1988, 7, 5) , edad: 35}
  ];
}
