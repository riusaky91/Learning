import { Component, effect, inject, signal } from "@angular/core";
import GifListComponent from "../../components/gif-list/gif-list";
import { GifsService } from "../../services/gifs.service";
import { Gif } from "../../interfaces/gif.interface";

@Component({
  selector: "gifs-search-page",
  templateUrl: "./search-page.html",
  imports: [GifListComponent],
  
})

export default class SearchPageComponent { //Default para exportar el componente y usar lazy loading
  
  gifService = inject(GifsService);// Inyectamos el servicio de gifs para usar su logica
  
  gifs = signal<Gif[]>([]);// Signal para almacenar los gifs que se muestran en la pagina

  onSearch(query: string) {//El query es el valor que nos llega del input del componente search-box.ts

    console.log({ query });

    this.gifService.searchGifs(query).subscribe((resp) => { // Hacemos la peticion HTTP y nos suscribimos a la respuesta;
      this.gifs.set(resp);// Actualizamos el signal con los gifs obtenidos de la busqueda   
      console.log(resp, "respuetsa") 
      
    });
  }

}