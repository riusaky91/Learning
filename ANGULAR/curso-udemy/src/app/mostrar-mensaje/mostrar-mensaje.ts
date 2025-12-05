import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-mostrar-mensaje',
  imports: [],
  templateUrl: './mostrar-mensaje.html',
  styleUrl: './mostrar-mensaje.css'
})
export class MostrarMensaje {

  mensaje: string = ''; // Variable para almacenar el mensaje

  constructor(private route: ActivatedRoute) {}

  ngOnInit() { {
    // Suscribirse a los parámetros de la ruta para obtener el mensaje
    this.route.queryParams.subscribe(params => { // Escucha los cambios en los parámetros de la ruta
      this.mensaje = params['mensaje'] || ''; // Asigna el mensaje o una cadena vacía si no existe
    });
  }
}

  mostrarMensaje() { // Método para mostrar el mensaje
    this.mensaje = '¡Hola! Este es un mensaje desde el componente MostrarMensaje.';
  }

  resetearMensaje() {
    this.mensaje = ''; // Método para resetear el mensaje
  }
}
