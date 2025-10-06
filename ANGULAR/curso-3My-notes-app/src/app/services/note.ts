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
}
