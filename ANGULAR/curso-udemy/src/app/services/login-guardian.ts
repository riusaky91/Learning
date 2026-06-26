import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from './login-service';

@Injectable({
  providedIn: 'root'
})
export class LoginGuardian implements CanActivate { // Implementa la interfaz CanActivate que sirve para proteger rutas

  constructor(private loginService: LoginService, private router: Router) { } // Inject LoginService and Router
  
  canActivate(): boolean { // Implementa el metodo canActivate method sirve para proteger rutas
    if (this.loginService.isAutenticado()) { //  Verifica si el usuario esta autenticado
      alert('Acceso concedido a la ruta protegida.');
      return true; // Permite el acceso a la ruta
    } else {
      this.router.navigate(['login']); // Redirige al usuario a la pagina de login
      alert('Acceso denegado. Debe iniciar sesión para acceder a esta ruta.');
      return false; // Bloquea el acceso a la ruta
    }

  } 
} 

