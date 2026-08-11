import { Injectable } from '@angular/core';
import { Auth, authState } from '@angular/fire/auth';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  constructor(private authService: Auth) {} // Inyecta el servicio Auth de Firebase en el constructor para poder utilizarlo en el servicio

  login(email: string, password: string) { // Método para iniciar sesión con correo electrónico y contraseña
    return new Promise((resolve, reject) => { // Retorna una promesa que se resolverá o rechazará según el resultado del inicio de sesión
      signInWithEmailAndPassword(this.authService, email, password) // Llama a la función signInWithEmailAndPassword de Firebase para iniciar sesión con el correo electrónico y la contraseña proporcionados
        .then((datos) => { // Si el inicio de sesión es exitoso, se ejecuta el bloque then
          resolve(datos); // Resuelve la promesa con el objeto datos que contiene información del usuario autenticado
        })
        .catch((error) => { // Si ocurre un error durante el inicio de sesión, se ejecuta el bloque catch
          reject(error); // Rechaza la promesa con el objeto error que contiene información sobre el error ocurrido
        });
    });
  }

  getAuthState():Observable<any> { // Método para obtener el estado de autenticación del usuario
    return authState(this.authService); // Retorna un Observable que emitirá el estado de autenticación del usuario, permitiendo suscribirse a los cambios en el estado de autenticación
  }

  logout() { // Método para cerrar sesión del usuario
    return this.authService.signOut(); // Llama al método signOut del servicio Auth de Firebase para cerrar sesión del usuario
  }
}
