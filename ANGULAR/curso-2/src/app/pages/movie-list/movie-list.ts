import { Component } from '@angular/core';
import { MovieService } from '../../services/movie.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-movie-list',
  imports: [RouterLink],
  templateUrl: './movie-list.html',
  styleUrl: './movie-list.css'
})
export class MovieList {
  constructor(public movieService: MovieService) {// se inyecta el servicio MovieService en el constructor para poder usarlo en el componente

  }
}
