import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { PiePagina } from "./componentes/pie-pagina/pie-pagina";
import { Cabecero } from "./componentes/cabecero/cabecero";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PiePagina, Cabecero],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly titulo = signal('control de clientes');
}
