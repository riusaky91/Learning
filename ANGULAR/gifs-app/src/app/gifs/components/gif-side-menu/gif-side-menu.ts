import { Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import GifSideMenuHeaderComponent from "./gif-side-menu-header/gif-side-menu-header";
import GifSideMenuOptionsComponent from "./gif-side-menu-options/gif-side-menu-options";

@Component({
  selector: "gif-side-menu",
  templateUrl: "./gif-side-menu.html",
  imports: [ GifSideMenuHeaderComponent,GifSideMenuOptionsComponent],
  
})

export default class GifSideMenuComponent { //Default para exportar el componente y usar lazy loading
  
}