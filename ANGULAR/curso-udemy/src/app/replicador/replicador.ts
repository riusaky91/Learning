import { Component } from '@angular/core';

@Component({
  selector: 'app-replicador',
  imports: [],
  templateUrl: './replicador.html',
  styleUrl: './replicador.css'
})
export class Replicador {
  texto: string = ''; // Variable para almacenar el texto ingresado

  actualizarTexto($event: Event) {
    this.texto = ($event.target as HTMLInputElement).value; // Actualiza el texto con el valor del input evento 
  }

}
