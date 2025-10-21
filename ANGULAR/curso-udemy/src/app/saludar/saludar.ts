import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Importa FormsModule para usar ngModel

@Component({
  selector: 'app-saludar',
  imports: [FormsModule],
  templateUrl: './saludar.html',
  styleUrl: './saludar.css'
})
export class Saludar {
  saludo: string = '¡Hola, bienvenido a nuestra aplicación Angular!';
}
