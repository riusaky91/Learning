import { Component, LOCALE_ID, signal } from '@angular/core';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpotacion } from "./interpotacion/interpotacion";
import { Padre } from "./padre/padre";
import { ListadoProductos } from "./tienda-online/listado-productos/listado-productos";
import { MostrarMensaje } from "./mostrar-mensaje/mostrar-mensaje";
import { Replicador } from "./replicador/replicador";
import { Saludar } from "./saludar/saludar";
import { CalculadoraApp } from "./calculadora-app/calculadora-app";
import { ComponenteIf } from "./componente-if/componente-if";
import { AgregarTarea } from "./agregar-tarea/agregar-tarea";
import { ComponenteFor } from "./componente-for/componente-for";
import { HijoDos } from './hijoDos/hijoDos';
import { ViewChildComponent } from "./view-child-component/view-child-component";
import { Mensaje } from './mensaje';
import { ListadoUsuarios } from "./listado-usuarios/listado-usuarios";
import { EjemploPipes } from "./ejemplo-pipes/ejemplo-pipes";
import { registerLocaleData } from '@angular/common';
import localeES from '@angular/common/locales/es';
import { Presupuesto } from "./presupuesto/presupuesto";
import { RouterOutlet } from '@angular/router';
import { Navegacion } from "./navegacion/navegacion";

registerLocaleData(localeES, 'es'); // Registro de datos de localización en español

@Component({ //decorador de componente de Angular
  selector: 'app-root', // es el selector del componente raíz
  imports: [ComponenteEnLinea, Interpotacion, Padre, ListadoProductos, HijoDos, MostrarMensaje, Replicador, Saludar, CalculadoraApp, ComponenteIf, AgregarTarea, ComponenteFor, ViewChildComponent, ListadoUsuarios, EjemploPipes, Presupuesto, RouterOutlet, Navegacion], // importa el RouterOutlet para la navegación
  providers: [{ provide: LOCALE_ID, useValue: 'es' }], // Proveedor para la localización en español
  templateUrl: './app.html',// ruta al archivo de plantilla HTML
  styleUrl: './app.css'// ruta al archivo de estilos CSS
})
export class App {
  protected readonly title = signal('ANGULAR'); // señal reactiva para el título de la aplicación

  mensaje: string; // Propiedad para almacenar un mensaje

  constructor(mensajeService: Mensaje) { // Inyección del servicio Mensaje
    this.mensaje = mensajeService.getMensaje(); // Obtiene el mensaje del servicio
  }
}
