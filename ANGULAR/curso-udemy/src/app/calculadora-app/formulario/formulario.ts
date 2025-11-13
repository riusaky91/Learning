import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  imports: [FormsModule],
  templateUrl: './formulario.html',
  styleUrl: './formulario.css'
})
export class Formulario {
  operandoA: number | null = null; // Nueva propiedad para el operando A
  operandoB: number | null = null; // Nueva propiedad para el operando B

  @Output() notificarAlPadre = new EventEmitter<number>(); // Evento para notificar al componente padre desde el componente hijo

  sumar(){
    if (this.operandoA !== null && this.operandoB !== null) { // Verifica que los operandos no sean nulos

      this.notificarAlPadre.emit(this.operandoA + this.operandoB); // Envía el resultado al componente padre
    } else {
      // Opcional: puedes emitir 0 o manejar el caso de valores nulos de otra forma
      console.error('Operandos no válidos');
    }
  }
}
