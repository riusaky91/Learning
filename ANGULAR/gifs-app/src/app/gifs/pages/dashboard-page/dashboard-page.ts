import { Component } from "@angular/core";
import { RouterOutlet } from "@angular/router";
import GifSideMenuHeaderComponent from "../../components/gif-side-menu/gif-side-menu-header/gif-side-menu-header";
import GifSideMenuOptionsComponent from "../../components/gif-side-menu/gif-side-menu-options/gif-side-menu-options";
import GifSideMenuComponent from "../../components/gif-side-menu/gif-side-menu";

@Component({
  selector: "gifs-dashboard-page",
  templateUrl: "./dashboard-page.html",
  imports: [RouterOutlet, GifSideMenuComponent],// Importar los componentes necesarios
  
})

export default class DashboardPageComponent { //Default para exportar el componente y usar lazy loading
  
}