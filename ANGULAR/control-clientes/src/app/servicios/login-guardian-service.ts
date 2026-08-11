import { Injectable } from '@angular/core';
import { authState, Auth } from '@angular/fire/auth'; // Importa el estado de autenticación y el servicio Auth de Firebase para manejar la autenticación del usuario
import { CanActivate, Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LoginGuardianService implements CanActivate {
  constructor(private authService: Auth, private router: Router) {} // Inyecta el servicio Auth de Firebase y el servicio Router en el constructor para poder utilizarlos en la clase
  

  canActivate(): boolean {
    return authState(this.authService).pipe(
      map(auth => !!auth || this.router.navigate(['/login']),false) //  Si el usuario está autenticado, devuelve true; de lo contrario, redirige al usuario a la página de inicio de sesión y devuelve false
    ) as unknown as boolean; // Convierte el resultado a un booleano para cumplir con la interfaz CanActivate
  }
}
