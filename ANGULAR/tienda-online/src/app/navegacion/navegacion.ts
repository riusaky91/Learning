import { Component } from '@angular/core';
import { RouterModule } from '@angular/router'; //Importa el módulo RouterModule para poder usar las directivas de enrutamiento en el componente de navegación

@Component({
  selector: 'app-navegacion',
  imports: [RouterModule], //Agrega RouterModule a los imports del componente para poder usar las directivas de enrutamiento
  templateUrl: './navegacion.html',
  styleUrl: './navegacion.css',
})
export class Navegacion {

}
