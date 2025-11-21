import { Component } from '@angular/core';
import { Usuarios } from '../usuarios';

@Component({
  selector: 'app-listado-usuarios',
  imports: [],
  templateUrl: './listado-usuarios.html',
  styleUrl: './listado-usuarios.css'
})
export class ListadoUsuarios {
  usuarios: any[] = []; // Propiedad para almacenar la lista de usuarios
  
  constructor(private usuariosService: Usuarios) {
    
  }

  ngOnInit() {// Método que se ejecuta al inicializar el componente
    
    this.usuariosService.obtenerUsuarios().subscribe((data) => {
      this.usuarios = data; // Asigna los datos obtenidos a la propiedad usuarios
    } );  
  }

}
