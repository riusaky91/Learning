import { Component } from '@angular/core';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {

  mensaje: string = ''; // Variable para almacenar el mensaje

  mostrarMensaje() { // Método para mostrar el mensaje
    this.mensaje = '¡Hola! Este es un mensaje desde el componente MostrarMensaje.';
  }

  resetearMensaje() {
    this.mensaje = ''; // Método para resetear el mensaje
  }
}
