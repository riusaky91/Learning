import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-resultado',
  imports: [],
  templateUrl: './resultado.html',
  styleUrl: './resultado.css'
})
export class Resultado {

  @Input() resultadoHijo!: number; // Propiedad para recibir el resultado del componente padre
}
