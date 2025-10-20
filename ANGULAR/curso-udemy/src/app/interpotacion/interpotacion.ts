import { Component } from '@angular/core';

@Component({
  selector: 'app-interpotacion',
  imports: [],
  templateUrl: './interpotacion.html',
  styleUrl: './interpotacion.css'
})
export class Interpotacion {
 titulo: string = 'Interpotacion en Angular';
 usuario: any = { 
  nombre: 'Leonardo',
  apellido: 'Estupiñan',
  edad: 34
 };

 saludar(): string {
  return `Hola, ${this.usuario.nombre} ${this.usuario.apellido}, tienes ${this.usuario.edad} años.`;
 }
}
