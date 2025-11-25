import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Cabecera } from "./cabecera/cabecera";
import { Formulario } from './formulario/formulario';

@Component({
  selector: 'app-presupuesto',
  imports: [CommonModule, Cabecera, Formulario],
  templateUrl: './presupuesto.html',
  styleUrl: './presupuesto.css'
})
export class Presupuesto {


  
}
