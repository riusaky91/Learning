import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-componente-for',
  imports: [FormsModule],
  templateUrl: './componente-for.html',
  styleUrl: './componente-for.css'
})
export class ComponenteFor {
 
  tareaInput: string = ''; // Nueva propiedad para el binding del input
 
  tareas: string[] = [ // Lista de tareas
    'Comprar pan',
    'Lavar el coche',
    'Estudiar Angular',
    'Hacer ejercicio'
  ];

  agregarTarea(nuevaTarea: string) {
    if (nuevaTarea) {
      this.tareas.push(nuevaTarea); // Agrega una nueva tarea a la lista
    }  
    this.tareaInput = ''; // Limpia el campo de entrada
  }
}
