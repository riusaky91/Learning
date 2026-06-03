import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ejemplo-replicador',
  imports: [FormsModule],
  templateUrl: './ejemplo-replicador.html',
  styleUrl: './ejemplo-replicador.css',
})
export class EjemploReplicador {
  texto: string = "Texto inicial";
  saludo = 'Saludo inicial';

  

  //Función para actualizar el texto al escribir en el campo de entrada
  actualizarTexto(event: Event) {
    const inputElement = event.target as HTMLInputElement; // accedo al elemento de entrada y lo convierto al tipo HTMLInputElement
    this.texto = inputElement.value;
  }
}
