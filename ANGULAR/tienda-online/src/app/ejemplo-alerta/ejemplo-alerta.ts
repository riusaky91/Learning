import { Component } from '@angular/core';

@Component({
  selector: 'app-ejemplo-alerta',
  imports: [],
  templateUrl: './ejemplo-alerta.html',
  styleUrl: './ejemplo-alerta.css',
})
export class EjemploAlerta {

  //Función para mostrar una alerta al hacer clic en el botón de alerta
  mostrarAlerta() {
    alert("¡Hola! Has hecho clic en el botón de alerta.");
  }

}
