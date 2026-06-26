import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase-service';
import { getIdToken, signInWithEmailAndPassword } from 'firebase/auth';
import { getId } from 'firebase/installations';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string | null = null; // Variable para almacenar el token de autenticación
  constructor(private router: Router, private firebaseService: FirebaseService) { // Inyección de dependencias de Router y FirebaseService
     
  }

  login(email: string, password: string) { // Método para iniciar sesión con email y contraseña
    const auth = this.firebaseService.auth;


    signInWithEmailAndPassword(auth, email, password) // Inicia sesión con email y contraseña
    .then(() => { // Si el inicio de sesión es exitoso
      auth.currentUser?.getIdToken().then((token: string) => { // Obtiene el token del usuario actual
        this.token = token; // Almacena el token
        this.router.navigate(['/listadoProductos']); // Redirige a la ruta por defecto después del login
      })

    })
    .catch((error) => { // Maneja errores al obtener el token
      console.error('Error al iniciar sesión:', error); // Muestra el error si ocurre un problema al iniciar sesión
    });

  }
  
  getIdToken() { // Método para obtener el token de autenticación
    return this.token;
  }


  isAutenticado(){
    return this.token !== ''; // Verifica si el usuario está autenticado comprobando si el token no está vacío
  }

  logout() { // Método para cerrar sesión
    const auth = this.firebaseService.auth;
    auth.signOut().then(() => { // Si el cierre de sesión es exitoso
      this.token = null; // Limpia el token de autenticación al cerrar sesión
      this.router.navigate(['/login']); // Redirige a la página de login después de cerrar sesión
    }).catch((error) => { // Maneja errores al cerrar sesión
      console.error('Error al cerrar sesión:', error); // Muestra el error si ocurre un problema al cerrar sesión
    }); 

   
  }

}
