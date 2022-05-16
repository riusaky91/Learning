import {aritmetica as a} from "./aritmetica.js";//Importacion de objeto
import saludar, { Saludar, pi, usuario } from "./constantes.js";////Importacion de variable pi desde otro javascript, la variable por defecto sale de la desetructuracion 


console.log("modulos .js");

console.log(pi);//utilizando variable importada

console.log( a.sumar(2,3));//utilizando objeto importado con alias

let saludo = new Saludar();
saludo;

saludar();