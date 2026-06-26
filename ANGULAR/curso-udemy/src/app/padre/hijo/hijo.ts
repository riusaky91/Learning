import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hijo',
  imports: [CommonModule],
  templateUrl: './hijo.html',
  styleUrl: './hijo.css'
})
export class Hijo  {
  @Input() texto!: string; // Propiedad para recibir el mensaje del componente padre si esta vacia no muestra nada 

  @Output() notificarAlPadre = new EventEmitter<string>(); // Evento para notificar al componente padre

  mensaje: string = 'Mensaje desde el componente hijo @View'; // Mensaje interno del componente hijo

  enviarMensaje() {
    this.notificarAlPadre.emit('Hola desde el componente Hijo!'); // Envía un mensaje al componente padre
  }


  cambiarMensaje(nuevoMensaje: string){//metodo para cambiar el mensaje interno
    this.mensaje = nuevoMensaje
  }
}
