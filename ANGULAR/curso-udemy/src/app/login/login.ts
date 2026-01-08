import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  imports: [FormsModule], // Importa FormsModule para usar formularios
  templateUrl: './login.html',
  styleUrl: './login.css'
})
export class Login {
  login(form: NgForm){
    
  }
}
