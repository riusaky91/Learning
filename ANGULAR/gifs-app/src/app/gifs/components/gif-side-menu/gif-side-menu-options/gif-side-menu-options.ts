import { Component } from "@angular/core";
import { RouterLink, RouterLinkActive } from "@angular/router";

interface MenuOption {
  label: string;  // Etiqueta que se mostrará en la opción del menú
  subLabel: string; // Subtítulo o descripción adicional de la opción
  route: string;  // Ruta a la que navegará al seleccionar la opción
  icon: string;  // Icono asociado a la opción del menú
}

@Component({
  selector: "gif-side-menu-options",
  templateUrl: "./gif-side-menu-options.html",
  imports: [RouterLink, RouterLinkActive],
  
})

export default class GifSideMenuOptionsComponent { //Default para exportar el componente y usar lazy loading
  menuOptions: MenuOption[] =  [
      {
        label: "Trending",
        subLabel: "Gifs más populares",
        route: "/Dashboard/Trending",
        icon: "fa-solid fa-chart-line"
      },
      {
        label: "Buscador",
        subLabel: "Buscar gifs",
        route: "/Dashboard/Search",
        icon: "fa-solid fa-magnifying-glass"
      }
    ]
}