import { Component } from '@angular/core';

@Component({
  selector: 'app-hijo-dos',
  imports: [],
  templateUrl: './hijoDos.html',
  styleUrl: './hijoDos.css'
})
export class HijoDos {
  private titulo: string = 'Componente Hijo'; // Título privado

  get mostrarTitulo(): string { // Getter público para acceder al título
    return this.titulo;
  }

  getTituloDirecto(): string { // Método público para obtener el título directamente
    return this.titulo;
  }
}
