import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Padre } from './padre/padre';
import { Hijo } from './padre/hijo/hijo';
import { ListadoProductos } from './tienda-online/listado-productos/listado-productos';
import { FormularioProducto } from './tienda-online/listado-productos/formulario-producto/formulario-producto';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpotacion } from './interpotacion/interpotacion';
import { Replicador } from './replicador/replicador';
import { Saludar } from './saludar/saludar';
import { CalculadoraApp } from './calculadora-app/calculadora-app';
import { ComponenteIf } from './componente-if/componente-if';
import { ComponenteFor } from './componente-for/componente-for';
import { AgregarTarea } from './agregar-tarea/agregar-tarea';
import { ViewChildComponent } from './view-child-component/view-child-component';
import { EjemploPipes } from './ejemplo-pipes/ejemplo-pipes';
import { Presupuesto } from './presupuesto/presupuesto';
import { Error } from './error/error';
import { Login } from './login/login';
import { LoginGuardian } from './services/login-guardian';

export const routes: Routes = [
    { path: '', component: ListadoUsuarios }, // Ruta por defecto que carga el componente ListadoUsuarios localhost:4200/listadoUsuarios
    { path: 'ComponenteEnlinea', component: ComponenteEnLinea,canActivate: [LoginGuardian]  }, // Ruta explícita pa  a el componente ComponenteEnLinea
    { path: 'interpotacion', component: Interpotacion }, // Ruta explícita para el componente Interpotacion
    { path: 'mostrar-mensaje', component: MostrarMensaje }, // Ruta explícita para el componente MostrarMensaje
    { path: 'configuracion', children: [ //
        {path: 'padre', component: Padre}, // Ruta explícita para el componente Padre localhost:4200/configuracion/padre
        {path: 'hijo', component: Hijo} // Ruta explícita para el componente Hijo localhost:4200/configuracion/hijo
    ] }, // Ruta explícita para el componente ListadoUsuarios
    { path: 'listadoProductos', component: ListadoProductos, canActivate: [LoginGuardian] }, // ruta explícita para el componente ListadoProductos localhost:4200/listado-productos protegida por LoginGuardian
    { path: 'agregar', component: FormularioProducto, canActivate: [LoginGuardian] }, // Redirección de la ruta 'usuarios' a la ruta por defecto
    { path: 'editar/:llave', component: FormularioProducto, canActivate: [LoginGuardian] }, // Ruta para editar un producto con un parámetro llave
    { path: 'replicador', component: Replicador}, // Ruta explícita para el componente Replicador localhost:4200/replicador
    { path: 'saludar', component: Saludar}, // Ruta explícita para el componente Saludar localhost:4200/saludar
    { path: 'calculadora', component: CalculadoraApp}, // Ruta explícita para el componente CalculadoraApp localhost:4200/calculadora
    { path: 'componenteIf', component: ComponenteIf}, // Ruta explícita para el componente ComponenteIf localhost:4200/componenteIf
    { path: 'agregarTarea', component: AgregarTarea}, // Ruta explícita para el componente AgregarTarea localhost:4200/agregarTarea
    { path: 'componenteFor', component: ComponenteFor}, // Ruta explícita para el componente ComponenteFor localhost:4200/componenteFor
    { path: 'viewChild', component: ViewChildComponent}, // Ruta explícita para el componente ViewChildComponent localhost:4200/viewChild
    { path: 'ejemplo-pipes', component: EjemploPipes}, // Ruta explícita para el componente EjemploPipes localhost:4200/ejemplo-pipes
    { path: 'presupuesto', component: Presupuesto}, // Ruta explícita para el componente Presupuesto localhost:4200/presupuesto
    { path: 'login', component: Login}, // Ruta explícita para el componente Login localhost:4200/login
    { path: '**', component: Error}, // Ruta comodín que redirige a la página de error para cualquier ruta no definida dejar al final
];
