import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Notes } from './pages/notes/notes';

export const routes: Routes = [

    {path: '', component: Home},// ruta por defecto
    {path: 'home', component: Home},//ruta alternativa
    {path: 'notes', component: Notes},//ruta para notas
    {path: '**', redirectTo: ''},//  ruta para cualquier otra cosa que no este definida en las anteriores
];
