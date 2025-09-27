import { Component } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Child } from '../../components/child/child';
import { NgClass } from '@angular/common';
import Product from '../../models/product';
import { ProductService } from '../../services/product.service';
@Component({
  selector: 'app-home',
  imports: [ FormsModule, Child, NgClass, ReactiveFormsModule, RouterModule],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {

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

  constructor(public productService: ProductService) { }//metodo que se ejecuta al crear el componente sirve para inicializar variables y hacer llamadas a servicios

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



  // -----------------------------------------Servicios--------------------------------------

  
  // -----------------------------------------Router para usar SPA--------------------------------------

  
  // -----------------------------------------Rutas parametrizadas--------------------------------------
    
  // -----------------------------------------ngOninit--------------------------------------
}
