import { Injectable } from '@angular/core';
import Note from '../../models/Note';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  notes: Note[];// arreglo de notas
  readonly apiUrl = 'https://cab8193b601cf9ae99fa.free.beeceptor.com/api/notes'; // URL de la API

  constructor(private http: HttpClient) {
    this.notes = []; // inicializar el arreglo de notas como vacio
  }


  getNotes() { // metodo para obtener las notas
    return this.http.get<Note[]>(this.apiUrl); // hacer una peticion GET a la URL de la API y retornar un observable de tipo Note[]
  }

  addNote(note: Note) { // metodo para agregar una nueva nota
    return this.http.post<Note>(this.apiUrl, note); // hacer una peticion POST a la URL de la API con el objeto nota y retornar un observable de tipo Note
    this.getNotes(); // actualizar la lista de notas despues de agregar una nueva nota
  }

  deleteNote(id: number) { // metodo para eliminar una nota por id
    this.http.delete(`${this.apiUrl}${id}`).subscribe({ // hacer una peticion DELETE a la URL de la API con el id de la nota y suscribirse al observable retornado
      next: () => { // si la peticion es exitosa, filtrar el arreglo de notas para eliminar la nota con el id especificado  
        this.notes = this.notes.filter(n => n.id !== id);
        console.log('Note deleted successfully:', id); // loguear el id de la nota eliminada
      },
      error: (err) => {
        console.error('Error deleting note:', err); // manejar errores en la peticion
      }
    });
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

  
  /*createNote(title: string) { // metodo para crear una nueva nota
    const newNote: Note = { // crear un objeto de tipo Note
      id: this.notes.length + 1, // asignar un id unico
      title, // asignar el titulo
      marked: false // asignar el estado de marcado como false por defecto
    };
    this.notes.push(newNote); // agregar la nueva nota al arreglo de notas
  }*/
}
