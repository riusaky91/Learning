import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class Mensaje {
  private mensaje: string = 'Mensaje por defecto desde el servicio Mensaje'; // Mensaje interno del servicio

  getMensaje(): string { // Método para obtener el mensaje
    return this.mensaje;
  }
}
