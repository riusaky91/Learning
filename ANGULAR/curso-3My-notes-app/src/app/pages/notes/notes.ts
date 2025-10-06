import { Component } from '@angular/core';
import { NoteService } from '../../services/note';
import { NoteCard } from '../../components/note-card/note-card';

@Component({
  selector: 'app-notes',
  imports: [NoteCard],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes {

  constructor(public noteService: NoteService) { 

  }
}
