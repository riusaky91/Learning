import { Component, signal } from '@angular/core';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpotacion } from "./interpotacion/interpotacion";
import { Padre } from "./padre/padre";
import { ListadoProductos } from "./listado-productos/listado-productos";
import { Hijo } from "./hijo/hijo";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";

@Component({ //decorador de componente de Angular
  selector: 'app-root', // es el selector del componente raíz
  imports: [ComponenteEnLinea, Interpotacion, Padre, ListadoProductos, Hijo, MostrarMensaje, Replicador, Saludar], // importa el RouterOutlet para la navegación
  templateUrl: './app.html',// ruta al archivo de plantilla HTML
  styleUrl: './app.css'// ruta al archivo de estilos CSS
})
export class App {
  protected readonly title = signal('pruebaapp'); // señal reactiva para el título de la aplicación
}
