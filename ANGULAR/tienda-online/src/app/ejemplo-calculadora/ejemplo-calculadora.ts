import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-calculadora',
  imports: [FormsModule],
  templateUrl: './ejemplo-calculadora.html',
  styleUrl: './ejemplo-calculadora.css',
})
export class EjemploCalculadora {

  resultado: number = 0;
  operandoa: number = 0;
  operandob: number = 0;
  sumar() {
    this.resultado = this.operandoa + this.operandob;
  }

}
