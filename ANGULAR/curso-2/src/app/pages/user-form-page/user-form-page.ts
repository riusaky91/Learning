import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-form-page',
  imports: [ReactiveFormsModule],
  templateUrl: './user-form-page.html',
  styleUrl: './user-form-page.css'
})
export class UserFormPage {
  userForm: FormGroup;// se crea el grupo del formulario
  id: FormControl;
  name: FormControl;// se crea el control del formulario
  email: FormControl;
  address: FormControl

  
  // -----------------------------------------reactiveForms--------------------------------------

  constructor(public userService: UserService) {// se inyecta el servicio en el constructor para hacer uso de el en el componente
    this.id = new FormControl('', [Validators.required,]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio
    this.name = new FormControl('', [Validators.required, Validators.pattern(/^[a-zA-Z\s]+$/)]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio
    this.email = new FormControl('', [Validators.required]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio y que no puede ser mayor a 300
    this.address = new FormControl('');// se inicializan el control del formulario
    
    this.userForm = new FormGroup({ // se inicializa el grupo del formulario y se le agregan los controles o entradas
      id: this.id,
      name: this.name,
      email: this.email,
      address: this.address
    });// se crea el formulario
  }

  postUser() {// funcion para manejar el submit del formulario
    
    console.log(this.userForm.value);// se imprime el valor del formulario
    this.userService.postUser(this.userForm.value).subscribe({// se llama al metodo postUser del servicio y se le pasa el valor del formulario
      next: (data) => {// funcion que se ejecuta cuando la peticion es exitosa
        console.log(data);// se imprime la respuesta de la peticion
      },
      error: (e) => {// funcion que se ejecuta cuando la peticion falla
        console.log(e);// se imprime el error de la peticion
      }
    });
    this.userForm.reset();// se resetea el formulario
  }

  
}
