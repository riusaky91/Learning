import { Component, signal } from '@angular/core';

import { RouterOutlet } from '@angular/router';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';

@Component({ //decorador de componente de Angular
  selector: 'app-root', // es el selector del componente raíz
  imports: [ComponenteEnLinea, RouterOutlet], // importa el RouterOutlet para la navegación
  templateUrl: './app.html',// ruta al archivo de plantilla HTML
  styleUrl: './app.css'// ruta al archivo de estilos CSS
})
export class App {
  protected readonly title = signal('pruebaapp'); // señal reactiva para el título de la aplicación
}
