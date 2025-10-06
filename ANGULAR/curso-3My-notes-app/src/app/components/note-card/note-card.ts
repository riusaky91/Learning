import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-note-card',
  imports: [MatCardModule],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css'
})
export class NoteCard {
  note = input<Note>();

}
