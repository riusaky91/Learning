import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { NoteService } from '../../services/note';

@Component({
  selector: 'app-note-card',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css'
})
export class NoteCard {
  
  note = input<Note>(); // nota que recibe el componente


  constructor(public noteService: NoteService) {// inyeccion de dependencias del servicio de notas

  }

  updateMarked(id: number | undefined) {// metodo para actualizar el estado de marcado de una nota
    if (!id) return; // si el id es undefined, salir del metodo
    this.noteService.updateMarked(id); // actualizar el estado de marcado de la nota en el servicio de notas
  }
  updateTitle(id: number | undefined, $event: Event | undefined) {// metodo para actualizar el titulo de una nota
    if (!id || !$event) return; // si el id o el evento son undefined, salir del metodo 
    this.noteService.updateTitle(id, ($event.target as HTMLInputElement).value); // actualizar el titulo de la nota en el servicio de notas
  }
}
