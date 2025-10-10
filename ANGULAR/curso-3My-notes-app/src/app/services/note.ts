import { Injectable } from '@angular/core';
import Note from '../../models/Note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];// arreglo de notas

  constructor() {
    this.notes = [ //arreglo de notas
      { id: 1, title: 'First Note', marked: false },
      { id: 2, title: 'Second Note', marked: true },
      { id: 3, title: 'Third Note', marked: false }
    ];
  }

  updateTitle(id: number, newTitle: string) { // metodo para actualizar el titulo de una nota
    const note = this.notes.find(n => n.id === id); // buscar la nota por id en el arreglo de objetos
    if (note) { // si la nota existe, actualizar el titulo
      note.title = newTitle;
    }
  }

  updateMarked(id: number) { // metodo para actualizar el estado de marcado de una nota
    const note = this.notes.find(n => n.id === id); // buscar la nota por id en el arreglo de objetos
    if (note) { // si la nota existe, actualizar el estado de marcado
      note.marked = !note.marked;
    } 
  }

  createNote(title: string) { // metodo para crear una nueva nota
    const newNote: Note = { // crear un objeto de tipo Note
      id: this.notes.length + 1, // asignar un id unico
      title, // asignar el titulo
      marked: false // asignar el estado de marcado como false por defecto
    };
    this.notes.push(newNote); // agregar la nueva nota al arreglo de notas
  }
}
