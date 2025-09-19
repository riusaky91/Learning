import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from './components/header/header';// se importa el componente header
import { FormsModule } from '@angular/forms';
import { Child } from "./components/child/child";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Header, FormsModule, Child],// se agrega el componente header a los imports
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  // -----------------------------------------VARIABLES--------------------------------------
  userName: string = 'MLEstupinan';
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

  






}


