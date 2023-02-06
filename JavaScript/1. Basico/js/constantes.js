
export const pi = Math.PI;//constante exportable

export let usuario = "leo";//variable no exportable
let pass= "12347";



export default function saludar() {//exportando por defecto solo se puede usar una vez
    console.log("hola");
}


export class Saludar {
    constructor() {
      console.log("Hola Clases +ES6");
    }
  }

  const password = "qwerty";
//export default password; // solo se puede despues de inicializar la variable