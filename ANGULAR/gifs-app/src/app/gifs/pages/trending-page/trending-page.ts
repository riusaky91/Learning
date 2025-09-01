import { Component, inject, signal } from "@angular/core";
import GifListComponent from "../../components/gif-list/gif-list";
import { GifsService } from "../../services/gifs.service";
/*
const imageUrls: string[] = [
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-1.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-2.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-3.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-4.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-5.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-6.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-7.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-8.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-9.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-10.jpg",
    "https://flowbite.s3.amazonaws.com/docs/gallery/square/image-11.jpg"
]
*/

@Component({
  selector: "gifs-trending-page",
  templateUrl: "./trending-page.html",
  imports: [GifListComponent],// Importar los componentes necesarios
  
})

export default class TrendingPageComponent {
  //gifs = signal(imageUrls); // Usamos signal para que Angular detecte los cambios en el array y actualice la vista
  
  gifService = inject(GifsService);// Inyectamos el servicio de gifs para usar su logica



}