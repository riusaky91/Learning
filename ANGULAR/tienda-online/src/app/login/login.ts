import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../servicios/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule],// Importa FormsModule para utilizar formularios en el componente Login
  templateUrl: './login.html',
  styleUrl: './login.css',
})
export class Login {


constructor(private loginService: LoginService) {} // Inyecto el servicio LoginService en el constructor para poder acceder a sus métodos y propiedades, lo que permitirá manejar la lógica de inicio de sesión utilizando los servicios de autenticación de Firebase a través del servicio LoginService  


  login(form: NgForm) { //Función para manejar el evento de envío del formulario de login, recibe el formulario como parámetro
    const email = form.value.email; //Obtengo el valor del campo de email del formulario utilizando form.value.email
    const password = form.value.password; //Obtengo el valor del campo de contraseña del formulario utilizando form.value.password
    this.loginService.login(email, password); //Llamo al método login del servicio LoginService, pasando el correo electrónico y la contraseña obtenidos del formulario para manejar el inicio de sesión utilizando los servicios de autenticación de Firebase a través del servicio LoginService
  }


  
  isAutenticado() {//Función para verificar si el usuario está autenticado, llama al método isAuthenticated del servicio LoginService para verificar el estado de autenticación utilizando los servicios de autenticación de Firebase a través del servicio LoginService 
    return this.loginService.isAuthenticated(); 
  }

  salir() { //Función para manejar el evento de cierre de sesión, llama al método logout del servicio LoginService para manejar el cierre de sesión utilizando los servicios de autenticación de Firebase a través del servicio LoginService
    this.loginService.logout(); //Llamo al método logout del servicio LoginService para manejar el cierre de sesión utilizando los servicios de autenticación de Firebase a través del servicio LoginService
  }
}