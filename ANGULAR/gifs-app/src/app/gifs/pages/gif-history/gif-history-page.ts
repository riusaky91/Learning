import { Component, computed, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";
import { GifsService } from "../../services/gifs.service";
import GifListComponent from "../../components/gif-list/gif-list";


@Component({
  selector: "gif-history-page",
  templateUrl: "./gif-history-page.html",
  imports: [GifListComponent],// Importar los componentes necesarios
  
})

export default class GifHistoryComponent { //Default para exportar el componente y usar lazy loading
  
  gifService = inject(GifsService)
  
  query = toSignal( //activamos la variable parametro dinamico de la URL

      inject(ActivatedRoute).params.pipe( // Inyectamos el ActivatedRoute para obtener los parametros de la ruta
        map( params => params['query'] ) // Mapeamos los parametros para obtener el parametro 'query'
      ) 

  ); // Definimos una señal para almacenar el parametro de la ruta 


  gifsByKey = computed(() => {
    return this.gifService.getHistoryGifs(this.query())
  })
  
}