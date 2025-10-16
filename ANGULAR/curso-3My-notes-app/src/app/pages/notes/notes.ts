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

  hasError: boolean = false; // Variable para rastrear si hay un error al obtener las notas
  isloading: boolean = true; // Variable para rastrear si las notas se estan cargando
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
        this.isloading = false; // Actualizar la variable isLoading a false cuando las notas se cargan
        this.hasError = false; // Asegurarse de que hasError sea false si la peticion es exitosa
      },
      error: (err) => {
        console.error('Error fetching notes:', err); // manejar errores en la peticion
        this.hasError = true; // Actualizar la variable hasError a true si hay un error al obtener las notas
      }
    }); 
  }

}
