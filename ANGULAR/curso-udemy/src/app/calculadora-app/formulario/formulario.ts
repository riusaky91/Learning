import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrls: ['./formulario.css']
})
export class Formulario {
  operandoA: number | null = null; // Cambiado a number | null para enlazar con el input
  operandoB: number | null = null; // Cambiado a number | null para enlazar con el input

  @Output() notificarAlPadre = new EventEmitter<number>(); // Evento para notificar al componente padre

  sumar(): void{
    if (this.operandoA !== null && this.operandoB !== null) {
      this.notificarAlPadre.emit(this.operandoA + this.operandoB); // Envía el resultado al componente padre
    } else {
      // Opcional: puedes emitir 0 o manejar el caso de valores nulos de otra forma
      console.error('Operandos no válidos');
    }
  }
}
