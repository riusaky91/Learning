import { Component, input } from "@angular/core";
import GifListItemComponent from "./gif-list-item/gif-list-item";
import { Gif } from "../../interfaces/gif.interface";

@Component({
  selector: "gifs-list",
  templateUrl: "./gif-list.html",
  imports: [GifListItemComponent],// Importar los componentes necesarios
  
})

export default class GifListComponent { //Default para exportar el componente y usar lazy loading
  gifs = input.required<Gif[]>(); // Input para recibir el array de gifs desde el componente padre
}