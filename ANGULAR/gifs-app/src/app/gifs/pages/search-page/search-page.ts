import { Component } from "@angular/core";
import GifListComponent from "../../components/gif-list/gif-list";

@Component({
  selector: "gifs-search-page",
  templateUrl: "./search-page.html",
  imports: [GifListComponent],
  
})

export default class SearchPageComponent { //Default para exportar el componente y usar lazy loading
  onSearch(query: string) {//El query es el valor que nos llega del input del componente search-box.ts
    console.log({ query });
  }
}