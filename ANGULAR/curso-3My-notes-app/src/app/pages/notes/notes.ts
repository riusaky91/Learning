import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';
import { CreateNote } from '../../components/create-note/create-note';

@Component({
  selector: 'app-notes',
  imports: [NoteCard, CreateNote],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  constructor(public noteService: NoteService) { 

  }
}
