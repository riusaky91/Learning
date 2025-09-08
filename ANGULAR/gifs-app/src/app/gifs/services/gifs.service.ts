import { HttpClient } from "@angular/common/http";
import { inject, Injectable, signal } from "@angular/core";
import { environment } from "@environments/environment";
import { GiphyItem, GiphyResponse } from "../interfaces/giphy.interfaces";
import { Gif } from "../interfaces/gif.interface";
import { GifMapper } from "../mapper/gif.mapper";
import { map, tap } from "rxjs";

@Injectable({ // Decorador para definir un servicio injectable
  providedIn: "root",// Servicio disponible en toda la aplicacion
})

// Servicio para manejar la logica de los gifs
export class GifsService {

    trendingGifs= signal<Gif[]>([]);// Signal para almacenar los gifs de tendencia
    trendingGifsLoading= signal(false);// Signal para indicar si se estan cargando los gifs de tendencia

    constructor() {
        this.loadTrendingGifs();// Cargar los gifs de tendencia al crear el servicio
    }  
    // Servicio para manejar la logica de los gifs
    private http = inject(HttpClient); // Inyectamos el HttpClient para hacer peticiones HTTP
    

    // metodo con la logica para cargar los gifs de tendencia
    loadTrendingGifs() { 
        
        this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/trending`, { 
        params: {
            api_key: environment.giphyapiKey,
            limit: '25',
            offset: '0',
            rating: 'g'
        } // Usamos las variables de entorno para la URL y la API key
        }).subscribe(resp => { // Hacemos la peticion HTTP y nos suscribimos a la respuesta
            const gifs = GifMapper.mapGiphyToGifArray(resp.data); // Mapeamos la respuesta a nuestro modelo de Gif
            this.trendingGifs.set(gifs);// Actualizamos el signal con los gifs de tendencia
            this.trendingGifsLoading.set(false);// Indicamos que ya no se estan cargando los gifs
            console.log({resp});// Mostramos la respuesta en consola
            console.log({gifs});// Mostramos los gifs en consola
        });
    }

    searchGifs(query: string) {
        //tarea implementar el metodo para buscar gifs teniendo en cuenta la api de giphy search
        return this.http.get<GiphyResponse>(`${environment.giphyURL}/gifs/search`, { 
        params: {
            api_key: environment.giphyapiKey,
            q: query, //Buscando en la palabra que se registre en el buscador
            limit: '20',
            offset: '0',
            rating: 'g'

        } // Usamos las variables de entorno para la URL y la API key
        }).pipe(//pipe para encadenar operadores de rxjs
            map(({data}) => data),//Desestructuramos la respuesta para obtener solo el array de items
            map((items) => GifMapper.mapGiphyToGifArray(items))//Mapeamos la respuesta a nuestro modelo de Gif
        );
        /*
        .subscribe(resp => { // Hacemos la peticion HTTP y nos suscribimos a la respuesta
            const gifs = GifMapper.mapGiphyToGifArray(resp.data); // Mapeamos la respuesta a nuestro modelo de Gif
            this.trendingGifs.set(gifs);// Actualizamos el signal con los gifs de tendencia
            this.trendingGifsLoading.set(false);// Indicamos que ya no se estan cargando los gifs
            console.log({resp});// Mostramos la respuesta en consola
            console.log({gifs});// Mostramos los gifs en consola
        });*/   
    
    }
}