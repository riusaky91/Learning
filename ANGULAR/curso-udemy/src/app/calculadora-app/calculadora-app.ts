import { Component } from '@angular/core';
import { FormsModule } from "@angular/forms";
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-calculadora-app',
  imports: [FormsModule, Formulario],
  templateUrl: './calculadora-app.html',
  styleUrl: './calculadora-app.css'
})
export class CalculadoraApp {
  
  resultadoHijo: number = 0; // Mensaje recibido del componente hijo

  recibirResultado(resultadoHijo: number) {
    this.resultadoHijo = resultadoHijo; // Actualiza el mensaje recibido del componente hijo
  }

}
