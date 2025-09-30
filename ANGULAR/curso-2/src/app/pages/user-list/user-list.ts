import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-user-list',
  imports: [RouterLink],
  templateUrl: './user-list.html',
  styleUrl: './user-list.css'
})
export class UserList {

  constructor(public userService: UserService) {// Inyectar el servicio UserService en el constructor del componente

   }

  ngOnInit(): void {// Ciclo de vida del componente que se ejecuta al inicializar el componente
    this.getUsers();// Llamar al método getUsers del servicio para obtener los usuarios al inicializar el componente
  }

  getUsers() {  // Método para obtener los usuarios
    this.userService.getUsers().subscribe({// Suscribirse al observable retornado por el método getUsers del servicio
      next:(data) => {// Función que se ejecuta cuando la petición es exitosa
        this.userService.users = data;// Asignar los datos obtenidos al arreglo de usuarios del servicio
        console.log(data)
      },
      
      error:(e) => { // Función que se ejecuta cuando la petición falla
        console.log(e)
      }
    
    })
      
  }

  deleteUser(id: number) {// funcion para eliminar un usuario
    this.userService.deleteUser(id).subscribe({// se llama al metodo deleteUser del servicio y se le pasa el id del usuario a eliminar
      next: (data) => {// funcion que se ejecuta cuando la peticion es exitosa
        console.log(data);// se imprime la respuesta de la peticion
        this.getUsers();// se llama al metodo getUsers para actualizar la lista de usuarios
      },
      error: (e) => {// funcion que se ejecuta cuando la peticion falla
        console.log(e);// se imprime el error de la peticion
      }
    }); 
  }

  
}
