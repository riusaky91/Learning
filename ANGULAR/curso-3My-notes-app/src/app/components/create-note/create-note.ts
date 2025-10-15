import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { NoteService } from '../../services/note-service';
import Note from '../../../models/Note';


@Component({
  selector: 'app-create-note',
  imports: [MatInputModule, FormsModule],
  templateUrl: './create-note.html',
  styleUrl: './create-note.css'
})
export class CreateNote {
  constructor(public noteService: NoteService) { }

  noteTitle: string = ''; // variable para almacenar el titulo de la nota

  handleSubmit() { // metodo para manejar el evento submit del formulario
    if (!this.noteTitle) return; // si el titulo de la nota es vacio, salir del metodo hay dos validaciones de notas vacias una esta y otra el input
    const newNote: Note = {  // crear un objeto de tipo Note
      id: Date.now(), // o usa un generador de id adecuado
      title: this.noteTitle, // asignar el titulo de la nota desde la variable
      marked: false
    }; // crear un objeto con el titulo de la nota y propiedades requeridas
    
 
    
    this.addNote(newNote); // llamar al metodo addNote para agregar la nueva nota
    //this.noteService.createNote(newNote.title); // llamar al metodo createNote del servicio de notas para crear una nueva nota
    console.log(this.noteTitle);
    this.noteTitle = ''; // limpiar el input despues de enviar el formulario
  }

  addNote(newNote: Note) { // metodo para agregar una nueva nota
       this.noteService.addNote(newNote).subscribe({// suscribirse al observable retornado por el metodo addNote del servicio
      next: (note: Note) => { // si la peticion es exitosa, loguear la nota agregada y agregarla al arreglo de notas en el servicio
        console.log('Note added successfully:', note);  
        this.noteService.notes.push(note); // agregar la nueva nota al arreglo de notas en el servicio
      },
      error: (err: any) => {
        console.error('Error adding note:', err); // manejar errores en la peticion
      }
    });
  } 
}
