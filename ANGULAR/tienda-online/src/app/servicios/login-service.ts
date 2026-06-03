import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { FirebaseService } from './firebase-service';
import { signInWithEmailAndPassword } from '@firebase/auth';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  

  private token: string | null = null; // Variable para almacenar el token de autenticación, inicializada como null

  constructor(private router:Router, private firebaseService: FirebaseService) {} // Inyecto el servicio FirebaseService en el constructor para poder acceder a sus métodos y propiedades, y el servicio Router para manejar la navegación en la aplicación 
  

  login(email: string, password: string) { // Función para manejar el inicio de sesión, recibe el correo electrónico y la contraseña ingresados por el usuario
    const auth = this.firebaseService.auth; // Obtengo la instancia de autenticación de Firebase desde el servicio FirebaseService para manejar el inicio de sesión utilizando los servicios de autenticación de Firebase


    signInWithEmailAndPassword(auth, email, password).then(() => { // Llamo a la función signInWithEmailAndPassword de Firebase para iniciar sesión con el correo electrónico y la contraseña proporcionados, pasando la instancia de autenticación obtenida del servicio FirebaseService, y me suscribo a la promesa que devuelve para manejar el resultado del inicio de sesión
      auth.currentUser?.getIdToken().then((token) => { // Si el inicio de sesión es exitoso, obtengo el token de autenticación del usuario actual utilizando el método getIdToken de Firebase, y me suscribo a la promesa que devuelve para manejar el resultado de la obtención del token
        this.token = token; // Almaceno el token de autenticación en la variable token para indicar que el usuario ha iniciado sesión correctamente
        this.router.navigate(['/listado-productos']); // Redirijo al usuario a la página de listado de productos después de iniciar sesión correctamente
      })
    }).catch((error) => { // Manejo de errores al obtener el token de autenticación, si ocurre un error al obtener el token, muestro una alerta con el mensaje de error
        alert(`Error al obtener el token de autenticación: ${error.message}`); // Muestro una alerta con el mensaje de error si ocurre un error al obtener el token de autenticación
    });
  }

  getIdToken(): string | null { // Función para obtener el token de autenticación almacenado en la variable token, devuelve el token si el usuario ha iniciado sesión correctamente, o null si no se ha iniciado sesión
    return this.token; // Devuelvo el token de autenticación almacenado en la variable token, lo que permite que otros componentes o servicios puedan verificar si el usuario ha iniciado sesión correctamente y obtener el token para realizar operaciones que requieran autenticación
  }

  isAuthenticated(): boolean { // Función para verificar si el usuario ha iniciado sesión correctamente, devuelve true si el token de autenticación está disponible, o false si no se ha iniciado sesión
    return this.token !== null; // Devuelvo true si el token de autenticación está disponible (lo que indica que el usuario ha iniciado sesión correctamente), o false si el token es null (lo que indica que no se ha iniciado sesión)
  }

  logout() { // Función para manejar el cierre de sesión, borra el token de autenticación almacenado en la variable token y redirige al usuario a la página de inicio de sesión después de cerrar sesión correctamente
    const auth = this.firebaseService.auth; // Obtengo la instancia de autenticación de Firebase desde el servicio FirebaseService para manejar el cierre de sesión utilizando los servicios de autenticación de Firebase
    auth.signOut().then(() => { // Llamo a la función signOut de Firebase para cerrar sesión, y me suscribo a la promesa que devuelve para manejar el resultado del cierre de sesión
      this.token = null; // Borro el token de autenticación almacenado en la variable token para indicar que el usuario ha cerrado sesión correctamente
      this.router.navigate(['/login']); // Redirijo al usuario a la página de inicio de sesión después de cerrar sesión correctamente
    }).catch((error) => { // Manejo de errores al cerrar sesión, si ocurre un error al cerrar sesión, muestro una alerta con el mensaje de error
        alert(`Error al cerrar sesión: ${error.message}`); // Muestro una alerta con el mensaje de error si ocurre un error al cerrar sesión
    });
  }
}
