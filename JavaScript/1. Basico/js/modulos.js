import {aritmetica as a} from "./aritmetica.js";//Importacion de objeto
import saludar, { Saludar, pi, usuario } from "./constantes.js";////Importacion de variable pi desde otro javascript, saludar es un metodo por defecto sale de la desestructuracion 


console.log("modulos .js");

console.log(pi);//utilizando variable importada

console.log( a.sumar(2,3));//utilizando objeto importado con alias

let saludo = new Saludar();//instancio objeto saludo conla clase del modulo contantes
saludo;

saludar();