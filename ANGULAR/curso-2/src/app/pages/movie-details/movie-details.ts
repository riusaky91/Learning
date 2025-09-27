import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../../services/movie.service';
import Movies from '../../models/movies';

@Component({
  selector: 'app-movie-details',
  imports: [],
  templateUrl: './movie-details.html',
  styleUrl: './movie-details.css'
})
export class MovieDetails {

  selectedMovie?: Movies;// se crea la variable para almacenar la pelicula seleccionada

  constructor(private route:ActivatedRoute, public movieService: MovieService) { 

  }

// -----------------------------------------ngOninit--------------------------------------

  ngOnInit(): void {// se ejecuta al iniciar el componente y es el lugar ideal para obtener los parametros de la ruta da orden de que el componente se renderice
    
    const movieName = this.route.snapshot.params['movieName'];// se obtiene el id que se recibe por la ruta

    console.log(movieName);// se imprime el id que se recibe por la ruta

    this.selectedMovie = this.movieService.getMovie(movieName);// se obtiene la pelicula del servicio por su nombre y se asigna a la variable selectedMovie
  }

  

}
