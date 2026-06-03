import { Injectable } from '@angular/core';
import { LoginService } from './login-service';
import { CanActivate, Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class GuardianService implements CanActivate {

  constructor(private loginservice: LoginService, // Inyecto el servicio LoginService en el constructor para poder acceder a sus métodos y propiedades, y el servicio Router para manejar la navegación en la aplicación
    private router: Router // Inyecto el servicio Router en el constructor para manejar la navegación en la aplicación, lo que permitirá redirigir al usuario a la página de inicio de sesión si no está autenticado
  ) {} 

  canActivate(): boolean { // Función para verificar si el usuario puede acceder a una ruta protegida, devuelve true si el usuario está autenticado, o false si no lo está
    if (this.loginservice.isAuthenticated()) { // Verifico si el usuario está autenticado utilizando el método isAuthenticated del servicio LoginService, lo que permite controlar el acceso a las rutas protegidas en la aplicación
      return true; // Si el usuario está autenticado, devuelvo true para permitir el acceso a la ruta protegida
    } else {
      this.router.navigate(['/login']); // Si el usuario no está autenticado, redirijo al usuario a la página de inicio de sesión utilizando el servicio Router para manejar la navegación en la aplicación
      return false; // Devuelvo false para denegar el acceso a la ruta protegida si el usuario no está autenticado
    }
  }

}
