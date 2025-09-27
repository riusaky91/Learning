import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';// se importa FormsModule para usar ngModel en el template y ReactiveFormsModule para usar formularios reactivos
import { RouterModule } from '@angular/router';
import { Header } from "./components/header/header";

@Component({
  selector: 'app-root',
  imports: [FormsModule, ReactiveFormsModule, RouterModule, Header],// se agrega el componente header a los imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  

}


