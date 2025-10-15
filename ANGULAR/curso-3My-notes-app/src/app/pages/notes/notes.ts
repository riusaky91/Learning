import { Component, OnInit } from '@angular/core';
import { NoteService } from '../../services/note-service';
import { NoteCard } from '../../components/note-card/note-card';
import { CreateNote } from '../../components/create-note/create-note';

@Component({
  selector: 'app-notes',
  imports: [NoteCard, CreateNote],
  templateUrl: './notes.html',
  styleUrl: './notes.css'
})
export class Notes implements OnInit {

  constructor(public noteService: NoteService) { 

  }

  ngOnInit(): void { // Implementar el metodo ngOnInit de la interfaz OnInit
    this.getNotes(); // Llamar al metodo getNotes cuando el componente se inicializa
  }

  getNotes() { // metodo para obtener las notas desde el servicio
    this.noteService.getNotes().subscribe({ // suscribirse al observable retornado por el metodo getNotes del servicio
      next: (notes) => {
        this.noteService.notes = notes.reverse(); // asignar las notas obtenidas al arreglo de notas del servicio para que esten disponibles en toda la aplicacion
        console.log('Notes fetched successfully:', notes); // loguear las notas obtenidas
      },
      error: (err) => {
        console.error('Error fetching notes:', err); // manejar errores en la peticion
      }
    }); 
  }

}
