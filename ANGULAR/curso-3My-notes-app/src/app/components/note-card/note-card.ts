import { Component, input } from '@angular/core';
import Note from '../../../models/Note';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {FormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

@Component({
  selector: 'app-note-card',
  imports: [MatCardModule, MatFormFieldModule, MatInputModule, FormsModule, MatButtonModule, MatIconModule],
  templateUrl: './note-card.html',
  styleUrl: './note-card.css'
})
export class NoteCard {
  note = input<Note>(); // nota que recibe el componente
  value : string = 'Clear me'; // valor inicial del input
}
