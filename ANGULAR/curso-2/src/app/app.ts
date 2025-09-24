import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';// se importa el componente header
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';// se importa FormsModule para usar ngModel en el template y ReactiveFormsModule para usar formularios reactivos
import { Child } from "./components/child/child";// se importa el componente child
import Product from './models/product';// se importa la interfaz Product
import { NgClass } from '@angular/common';// se importa NgClass para usar ngClass en el template
import { ProductService } from './services/product.service';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, Child, NgClass, ReactiveFormsModule, RouterLink],// se agrega el componente header a los imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // -----------------------------------------VARIABLES--------------------------------------
  //userName: string = 'MLEstupinan';
  number: number = 0;

  // -----------------------------------------FUNCTIONS--------------------------------------
  addOne() {// funcion para aumentar en 1 el valor de la variable number
    this.number += 1;
  }

  // -----------------------------------------iF--------------------------------------
  condition: boolean = false;// variable para el @if

  // -----------------------------------------for--------------------------------------

  peliculas: string[] = ['Batman', 'Spiderman', 'Ironman'];

  animals: any = [
    {
      id: 1,
      name: 'Lion',
      species: 'Panthera leo',
      age: 8
    },
    {
      id: 2,
      name: 'Elephant',
      species: 'Loxodonta africana',
      age: 25
    },
    {
      id: 3,
      name: 'Giraffe',
      species: 'Giraffa camelopardalis',
      age: 12
    }
  ];

  // -----------------------------------------input--------------------------------------

  userName: string = 'MLEstupinan';// variable para enviar el dato al componente hijo

  // -----------------------------------------output--------------------------------------

  //name: string = '';

  /*setName(event: any) {// funcion para recibir el dato del componente hijo
    this.name = event;
  }*/

  // -----------------------------------------output con signal--------------------------------------

  name: string = '';

  setName(event: any) {// funcion para recibir el dato del componente hijo
    this.name = event;
  }

  // -----------------------------------------uso delconstructor--------------------------------------

  //constructor() { }//metodo que se ejecuta al crear el componente sirve para inicializar variables y hacer llamadas a servicios

  // -----------------------------------------models en interfaces--------------------------------------

  product: Product = {// se crea una variable de tipo Product que es la interfaz creada en el archivo product.ts
    id: 1,
    name: 'Producto 1',
    price: 100,
    isForSale: true
  };

  // -----------------------------------------ngClass--------------------------------------

  isDark: boolean = true;// variable para el ngClass

  toogleDark() {// funcion para cambiar el valor de la variable isDark
    this.isDark = !this.isDark;
  }

  // -----------------------------------------reactiveForms--------------------------------------

  movieForm: FormGroup;// se crea el grupo del formulario
  movieName: FormControl;// se crea el control del formulario
  duration: FormControl;
  director: FormControl;
  
  constructor(public productService: ProductService) {// se inyecta el servicio en el constructor para hacer uso de el en el componente
    this.movieName = new FormControl('', Validators.required);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio
    this.duration = new FormControl('', [Validators.required, Validators.max(300)]);// se inicializan el control del formulario y se le agrega una validacion de que es obligatorio y que no puede ser mayor a 300
    this.director = new FormControl('');// se inicializan el control del formulario
    
    this.movieForm = new FormGroup({ // se inicializa el grupo del formulario y se le agregan los controles o entradas
      movieName: this.movieName,
      duration: this.duration,
      director: this.director 
    });// se crea el formulario
  }

  handleSubmit() {// funcion para manejar el submit del formulario
    console.log(this.movieForm.value);// se imprime el valor del formulario
    this.movieForm.reset();// se resetea el formulario
  }

  // -----------------------------------------Servicios--------------------------------------

  
  // -----------------------------------------Router para usar SPA--------------------------------------

  
  // -----------------------------------------Rutas parametrizadas--------------------------------------


}


