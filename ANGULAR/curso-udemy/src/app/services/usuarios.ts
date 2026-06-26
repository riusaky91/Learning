import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class Usuarios {
  private apiUrl = 'https://jsonplaceholder.typicode.com/users';// URL de la API de usuarios

  constructor(private http:HttpClient) { }

  obtenerUsuarios() : Observable<any> { // Método para obtener la lista de usuarios
    return this.http.get(this.apiUrl); // Realiza una solicitud GET a la API para obtener la lista de usuarios
  }
}
