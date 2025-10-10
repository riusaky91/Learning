import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from "@angular/material/input";
import { NoteService } from '../../services/note';
import { not } from 'rxjs/internal/util/not';

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
    const newNote = { 
      title: this.noteTitle 
    }; // crear un objeto con el titulo de la nota
    
    this.noteService.createNote(newNote.title); // llamar al metodo createNote del servicio de notas para crear una nueva nota
    console.log(this.noteTitle);
    this.noteTitle = ''; // limpiar el input despues de enviar el formulario
  }
}
