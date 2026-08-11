import { Routes } from '@angular/router';
import { Tablero } from './componentes/tablero/tablero';
import { Login } from './componentes/login/login';
import { EditarCliente } from './componentes/editar-cliente/editar-cliente';
import { NoEncontrado } from './componentes/no-encontrado/no-encontrado';
import { LoginGuardianService } from './servicios/login-guardian-service';

export const routes: Routes = [
    { path: '', component: Tablero, canActivate: [LoginGuardianService] }, // Ruta protegida para el componente Tablero, solo accesible si el usuario está autenticado
    { path: 'login', component: Login }, // Ruta para el componente Login
    { path: 'cliente/editar/:id', component: EditarCliente, canActivate: [LoginGuardianService] }, // Ruta protegida para el componente EditarCliente, solo accesible si el usuario está autenticado
    { path: '**', component: NoEncontrado } // Ruta comodín para manejar rutas no encontradas
];
