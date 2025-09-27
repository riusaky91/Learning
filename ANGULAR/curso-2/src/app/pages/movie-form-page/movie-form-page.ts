import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { MovieService } from '../../services/movie.service';

@Component({
  selector: 'app-movie-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './movie-form-page.html',
  styleUrl: './movie-form-page.css'
})
export class MovieFormPage {

  movieForm: FormGroup;// se crea el grupo del formulario
  name: FormControl;// se crea el control del formulario
  duration: FormControl;
  director: FormControl;
  
  // -----------------------------------------reactiveForms--------------------------------------

  constructor(public movieService: MovieService) {// se inyecta el servicio en el constructor para hacer uso de el en el componente
    this.name = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio
    this.duration = new FormControl('', [Validators.required, Validators.max(300)]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio y que no puede ser mayor a 300
    this.director = new FormControl('');// se inicializan el control del formulario
    
    this.movieForm = new FormGroup({ // se inicializa el grupo del formulario y se le agregan los controles o entradas
      name: this.name,
      duration: this.duration,
      director: this.director 
    });// se crea el formulario
  }

  handleSubmit() {// funcion para manejar el submit del formulario
    console.log(this.movieService);// se imprime si el formulario es valido o no
    console.log(this.movieForm.value);// se imprime el valor del formulario
    this.movieService.addMovie(this.movieForm.value);// se agrega la pelicula al array de peliculas usando el servicio
    this.movieForm.reset();// se resetea el formulario
  }

}
