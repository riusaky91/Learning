import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";

@Component({
  selector: 'app-calculadora-app',
  imports: [FormsModule],
  templateUrl: './calculadora-app.html',
  styleUrl: './calculadora-app.css'
})
export class CalculadoraApp {
  operandoA: string = '';
  operandoB: string = '';
  resultado: number = 0;

  sumar(){
     return this.resultado = parseInt(this.operandoA) + parseInt(this.operandoB);
  }

}
