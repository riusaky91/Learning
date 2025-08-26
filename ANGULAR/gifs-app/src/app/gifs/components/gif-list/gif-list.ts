import { Component, input } from "@angular/core";
import GifListItemComponent from "./gif-list-item/gif-list-item";

@Component({
  selector: "gifs-list",
  templateUrl: "./gif-list.html",
  imports: [GifListItemComponent],// Importar los componentes necesarios
  
})

export default class GifListComponent { //Default para exportar el componente y usar lazy loading
  gifs = input.required<string[]>(); // Input para recibir el array de gifs desde el componente padre
}