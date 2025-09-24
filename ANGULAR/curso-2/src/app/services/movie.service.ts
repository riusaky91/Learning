import { Injectable } from '@angular/core';
import Movies from '../models/movies';


@Injectable({
  providedIn: 'root'
})
export class MovieService {
  movies: Movies[];
  
  constructor() {
    this.movies = [// se inicializa la variable movies con un array de objetos que cumplen con la interfaz Movies
      {
        name: 'Inception',  
        duration: 148,
        director: 'Christopher Nolan'
      },
      {
        name: 'The Matrix',
        duration: 136,
        director: 'The Wachowskis' 
      }
    ]
  }

  addMovie(movie: Movies) {// se crea un metodo para agregar una pelicula al array movies
    this.movies.push(movie);
  }


  getMovie(name:String): Movies | undefined {// se crea un metodo para obtener una pelicula del array movies por su nombre
    return this.movies.find(movie => movie.name === name);// se busca la pelicula en el array movies por su nombre y se retorna
  }

}
