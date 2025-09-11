import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map } from "rxjs";
import { toSignal } from "@angular/core/rxjs-interop";


@Component({
  selector: "gif-history-page",
  templateUrl: "./gif-history-page.html",
  imports: [ ],// Importar los componentes necesarios
  
})

export default class GifHistoryComponent { //Default para exportar el componente y usar lazy loading
  query = toSignal(

      inject(ActivatedRoute).params.pipe( // Inyectamos el ActivatedRoute para obtener los parametros de la ruta
        map( params => params['query'] ) // Mapeamos los parametros para obtener el parametro 'query'
      ) 

  ); // Definimos una señal para almacenar el parametro de la ruta 
  
}