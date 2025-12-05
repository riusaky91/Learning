import { Routes } from '@angular/router';
import { ListadoUsuarios } from './listado-usuarios/listado-usuarios';
import { MostrarMensaje } from './mostrar-mensaje/mostrar-mensaje';
import { Padre } from './padre/padre';
import { Hijo } from './padre/hijo/hijo';
import { ListadoProductos } from './tienda-online/listado-productos/listado-productos';
import { FormularioProducto } from './tienda-online/listado-productos/formulario-producto/formulario-producto';
import { ComponenteEnLinea } from './componente-en-linea/componente-en-linea';
import { Interpotacion } from './interpotacion/interpotacion';

export const routes: Routes = [
    //{ path: '**', redirectTo: ''}, // Ruta comodín que redirige a la ruta por defecto para cualquier ruta no definida
    { path: '', component: ListadoUsuarios }, // Ruta por defecto que carga el componente ListadoUsuarios localhost:4200/listadoUsuarios
    { path: 'ComponenteEnlinea', component: ComponenteEnLinea }, // Ruta explícita para el componente ComponenteEnLinea
    { path: 'interpotacion', component: Interpotacion }, // Ruta explícita para el componente Interpotacion
    { path: 'mostrar-mensaje', component: MostrarMensaje }, // Ruta explícita para el componente MostrarMensaje
    { path: 'configuracion', children: [ //
        {path: 'padre', component: Padre}, // Ruta explícita para el componente Padre localhost:4200/configuracion/padre
        {path: 'hijo', component: Hijo} // Ruta explícita para el componente Hijo localhost:4200/configuracion/hijo
    ] }, // Ruta explícita para el componente ListadoUsuarios
    { path: 'listadoProductos', component: ListadoProductos }, // ruta explícita para el componente ListadoProductos localhost:4200/listado-productos
    {path: 'agregar', component: FormularioProducto}, // Redirección de la ruta 'usuarios' a la ruta por defecto
    {path: 'editar/:id', component: FormularioProducto}, // Ruta para editar un producto con un parámetro dinámico 'id'
    
];
