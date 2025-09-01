import { Gif } from "../interfaces/gif.interface";
import { GiphyItem } from "../interfaces/giphy.interfaces";

export class GifMapper { // Clase para mapear los datos de la API de Giphy a nuestro modelo de Gif
    
    static mapGiphyItemToGif( giphtItem: GiphyItem){ // Mapea un GiphyItem a un Gif es un metodo estatico ya que no necesitamos instanciar la clase para usarlo 
        return {
            id: giphtItem.id,
            url: giphtItem.images.original.url,
            title: giphtItem.title
        }
    }

    static mapGiphyToGifArray( giphtItems: GiphyItem[]): Gif[]{ // Mapea un array de GiphyItem a un array de Gif metodo estatico ya que no necesitamos instanciar la clase para usarlo 
        return giphtItems.map( this.mapGiphyItemToGif);
    }
}