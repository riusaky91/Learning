import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { LoginService } from '../services/login-service';

@Component({
  selector: 'app-login',
  imports: [FormsModule], // Importa FormsModule para usar formularios
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {

  constructor(private loginService: LoginService) { }

  login(form: NgForm){ // Método para manejar el inicio de sesión
    const email = form.value.email; // Obtiene el email del formulario
    const password = form.value.password; // Obtiene la contraseña del formulario
    this.loginService.login(email, password); // Llama al servicio de login para iniciar sesión
    
  }
}
