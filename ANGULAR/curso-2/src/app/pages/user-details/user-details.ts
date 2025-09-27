import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-details',
  imports: [],
  templateUrl: './user-details.html',
  styleUrl: './user-details.css'
})
export class UserDetails {

  selectedUser: any; // Variable para almacenar el usuario seleccionado

  constructor(private route: ActivatedRoute, public userService: UserService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.params['id'];// Obtener el parámetro 'id' de la ruta
    this.getUser(id);// Llamar al método getUser con el ID obtenido
  }

  getUser(id: number) { // Método para obtener el ID del usuario
    this.userService.getUser(id).subscribe({// Llamar al método getUser del servicio con el ID obtenido
      next: (data) => {// Función que se ejecuta cuando la petición es exitosa
        this.selectedUser = [data];// Asignar los datos obtenidos al arreglo de usuarios del servicio
        console.log(data.id)
      },
      error: (e) => { // Función que se ejecuta cuando la petición falla
        console.log(e)
      }
    })
  }
}
