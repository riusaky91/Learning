import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { MovieList } from './pages/movie-list/movie-list';
import { MovieFormPage } from './pages/movie-form-page/movie-form-page';
import { MovieDetails } from './pages/movie-details/movie-details';

export const routes: Routes = [

    {path: '', component: Home},// ruta por defecto que carga el componente Home
    {path: 'home', component: Home},// ruta que carga el componente Home
    {path: 'movies', component: MovieList},// ruta que carga el componente MovieList
    {path: 'movies/:movieName', component: MovieDetails},// ruta que carga el componente MovieDetails con un parametro llamado movieName
    {path: 'create', component: MovieFormPage},// ruta que carga el componente MovieFormPage

];
