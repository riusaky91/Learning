import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Users from '../models/users';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  users: Users[]; // Arreglo para almacenar los usuarios

  readonly API_URL = 'https://ca942d486d2f9a29e021.free.beeceptor.com/api/users'; // readonly para la URL de la API de usuarios readonly es para que la variable no pueda ser modificada

  constructor( private http: HttpClient) { 
    this.users = [] // Inicializar el arreglo de usuarios como vacío
  }

  getUsers() {
    return this.http.get<Users[]>(this.API_URL); // Retornar el observable de la petición HTTP GET
  }

  getUser(id: number) { // Método para obtener el ID del usuario
    return this.http.get<Users>(`${this.API_URL}/${id}`); // Retornar el observable de la petición HTTP GET con el ID del usuario
  }

  postUser(user: Users) { // Método para agregar un nuevo usuario
    return this.http.post<Users>(this.API_URL, user); // Retornar el observable de la petición HTTP POST con el nuevo usuario
  }

  putUser(id: number, user: Users) { // Método para actualizar un usuario existente
    return this.http.put<Users>(`${this.API_URL}/${id}`, user); // Retornar el observable de la petición HTTP PUT con el ID del usuario y los datos actualizados
  }

  deleteUser(id: number) { // Método para eliminar un usuario
    return this.http.delete<Users>(`${this.API_URL}/${id}`); // Retornar el observable de la petición HTTP DELETE con el ID del usuario
  }

}
  