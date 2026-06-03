import { Routes } from '@angular/router';
import { InicioComponent } from './inicio-component/inicio-component'; //Importa el componente Inicio para la ruta de inicio
import { AcercaComponent } from './acerca-component/acerca-component'; //Importa el componente Acerca para la ruta de acerca
import { ListadoProductos } from './listado-productos/listado-productos'; //Importa el componente ListadoProductos para la ruta de listado de productos
import { FormularioProducto } from './listado-productos/formulario-producto/formulario-producto';
import { EjemploAlerta } from './ejemplo-alerta/ejemplo-alerta';
import { EjemploReplicador } from './ejemplo-replicador/ejemplo-replicador';
import { EjemploCalculadora } from './ejemplo-calculadora/ejemplo-calculadora';
import { ErrorComponent } from './error-component/error-component';
import { Login } from './login/login';
import { GuardianService } from './servicios/guardian-service';

export const routes: Routes = [

    { path: '', component: InicioComponent, canActivate:[GuardianService] }, // Ruta para componente Inicio, protegida por el servicio GuardianService para verificar si el usuario ha iniciado sesión correctamente utilizando los servicios de autenticación de Firebase a través del servicio LoginService antes de permitir el acceso a esta ruta
    { path: 'acerca', component: AcercaComponent, canActivate:[GuardianService] }, // Ruta para componente Acerca, protegida por el servicio GuardianService para verificar si el usuario ha iniciado sesión correctamente utilizando los servicios de autenticación de Firebase a través del servicio LoginService antes de permitir el acceso a esta ruta
    { path: 'login', component: Login }, // Ruta para componente Login
    { path: 'listado-productos', component: ListadoProductos }, // Ruta para componente Listado de Productos
    { path: 'agregar', component: FormularioProducto }, // Ruta para componente Formulario de Producto
    { path: 'editar/:llave', component: FormularioProducto }, // Ruta para editar un producto específico, con un parámetro de ID
    { path: 'alerta', component: EjemploAlerta }, // Ruta para componente Ejemplo de Alerta
    { path: 'replicador', component: EjemploReplicador }, // Ruta para componente Ejemplo de Replicador
    { path: 'calculadora', component: EjemploCalculadora }, // Ruta para componente Ejemplo de Calculadora
    { path: '**', component: ErrorComponent }, // Ruta comodín para redirigir a la página de inicio si no se encuentra la ruta solicitada
];
