import { Component, input } from "@angular/core";

@Component({
  selector: "gifs-list-item",
  templateUrl: "./gif-list-item.html",
  
})

export default class GifListItemComponent { //Default para exportar el componente y usar lazy loading
  imageUrl = input.required<string>(); //Propiedad para recibir los gifs
}