import { Component } from '@angular/core';

@Component({
  selector: 'app-componente-if',
  imports: [],
  templateUrl: './componente-if.html',
  styleUrl: './componente-if.css'
})
export class ComponenteIf {
  isAuthenticated: boolean = false; // Variable para controlar la autenticación

  toggleAuthentication() { // Método para alternar el estado de autenticación
    this.isAuthenticated = !this.isAuthenticated;
  }
}
