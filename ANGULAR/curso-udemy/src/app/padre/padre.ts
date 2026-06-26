import { Component, ViewChild } from '@angular/core';
import { Hijo } from './hijo/hijo';

@Component({
  selector: 'app-padre',
  imports: [Hijo],
  templateUrl: './padre.html',
  styleUrl: './padre.css'
})

export class Padre {

  textoPadre: string = 'Hola desde el componente Padre!'; // Mensaje para enviar al componente hijo
  
  
  mensajeHijo: string = ""; // Mensaje recibido del componente hijo

  @ViewChild(Hijo) hijoComponent!: Hijo; // Referencia al componente hijo

  // Se emitió un str, es lo que recibimos
  recibirNotificacion(mensajeHijo: string) {
    this.mensajeHijo = mensajeHijo; // Actualiza el mensaje recibido del componente hijo
  }

  cambiarMensajeHijo() {
    this.hijoComponent.cambiarMensaje('Mensaje cambiado desde el componente Padre!'); // Cambia el mensaje del hijo
  }

}
