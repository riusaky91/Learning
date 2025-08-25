import { Component } from "@angular/core";
import { environment } from "@environments/environment"; // Importo las variables de entorno uso de alias para no usar rutas relativas


@Component({
  selector: "gif-side-menu-header",
  templateUrl: "./gif-side-menu-header.html",
  
})

export default class GifSideMenuHeaderComponent { //Default para exportar el componente y usar lazy loading
  envs = environment;// Traigo las variables de entorno para usarlas en el html
}