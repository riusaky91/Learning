import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: any[]; // Arreglo para almacenar los usuarios

  readonly API_URL = 'https://jsonplaceholder.typicode.com/users'; // readonly para la URL de la API de usuarios readonly es para que la variable no pueda ser modificada

  constructor( private http: HttpClient) { 
    this.users = [] // Inicializar el arreglo de usuarios como vacío
  }

  getUsers() {
    return this.http.get<any[]>(this.API_URL); // Retornar el observable de la petición HTTP GET
  }

  getUser(id: number) { // Método para obtener el ID del usuario
    return this.http.get<any>(`${this.API_URL}/${id}`); // Retornar el observable de la petición HTTP GET con el ID del usuario
  }

}
  