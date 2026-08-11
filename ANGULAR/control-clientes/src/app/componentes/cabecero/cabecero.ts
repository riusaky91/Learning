import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LoginService } from '../../servicios/login-service';

@Component({
  selector: 'app-cabecero',
  imports: [RouterModule], // Importa RouterModule para usar routerLink en el template
  templateUrl: './cabecero.html',
  styleUrl: './cabecero.css',
})
export class Cabecero {

  isLoggedIn: boolean = false; // Propiedad para almacenar el estado de inicio de sesión del usuario
  loggedInUser: string = ''; // Propiedad para almacenar el correo electrónico del usuario autenticado

  constructor(private loginService: LoginService, private router: Router) {} // Inyecta el servicio LoginService y el servicio Router en el constructor para poder utilizarlos en la clase

  ngOnInit() {
    this.loginService.getAuthState().subscribe((user) => { // Se suscribe al estado de autenticación del usuario utilizando el servicio LoginService
      if (user) { // Si el usuario está autenticado
        this.isLoggedIn = true; // Actualiza la propiedad isLoggedIn a true
        this.loggedInUser = user.email; // Almacena el correo electrónico del usuario autenticado en la propiedad loggedInUser
      } else { // Si el usuario no está autenticado
        this.isLoggedIn = false; // Actualiza la propiedad isLoggedIn a false
        this.loggedInUser = ''; // Limpia la propiedad loggedInUser
      }
    });
  }

  logout() { // Método para cerrar sesión del usuario
    this.loginService.logout() // Llama al método logout del servicio LoginService para cerrar sesión
      .then(() => { // Si el cierre de sesión es exitoso, se ejecuta el bloque then
        this.router.navigate(['/login']); // Redirige al usuario a la página de inicio de sesión después de cerrar sesión
      })
      .catch((error) => { // Si ocurre un error durante el cierre de sesión, se ejecuta el bloque catch
        console.error('Error al cerrar sesión:', error); // Muestra en la consola un mensaje indicando que ocurrió un error durante el cierre de sesión junto con la información del error
      });
  }

}
