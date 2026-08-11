import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from '../../servicios/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {

  email: string = ''; // Propiedad para almacenar el correo electrónico ingresado por el usuario
  password: string = ''; // Propiedad para almacenar la contraseña ingresada por el usuario
  mensajeError: string = ''; // Propiedad para almacenar el mensaje de error en caso de que ocurra un problema durante el inicio de sesión

  constructor(private router: Router, private loginService: LoginService) {} // Inyecta el servicio Router y el servicio LoginService en el constructor para poder utilizarlos en la clase

  ngOnInit() {
    this.loginService.getAuthState().subscribe((user) => { // Se suscribe al estado de autenticación del usuario utilizando el servicio LoginService
      if (user) { // Si el usuario está autenticado
        this.router.navigate(['/']); // Redirige al usuario a la ruta principal de la aplicación si ya está autenticado
      }
    });
  }


  login() {
    if(this.email && this.password) { // Verifica si se han ingresado tanto el correo electrónico como la contraseña
      this.loginService.login(this.email, this.password) // Llama al método login del servicio LoginService pasando el correo electrónico y la contraseña ingresados
        .then((userCredential) => { // Si el inicio de sesión es exitoso, se ejecuta el bloque then
          console.log('Inicio de sesión exitoso:', userCredential); // Muestra en la consola un mensaje indicando que el inicio de sesión fue exitoso junto con la información del usuario autenticado
          this.router.navigate(['/']); // Redirige al usuario a la ruta principal de la aplicación después de un inicio de sesión exitoso
        })
        .catch((error) => { // Si ocurre un error durante el inicio de sesión, se ejecuta el bloque catch
          this.mensajeError = 'Error al iniciar sesión: ' + error.message; // Muestra un mensaje de error indicando que ocurrió un problema durante el inicio de sesión junto con la descripción del error
          console.error('Error al iniciar sesión:', error); // Muestra en la consola un mensaje indicando que ocurrió un error durante el inicio de sesión junto con la información del error
        });
    } else {
      this.mensajeError = 'Por favor, ingrese su correo electrónico y contraseña.'; // Muestra un mensaje de error indicando que se deben ingresar tanto el correo electrónico como la contraseña
    }
  }


}
