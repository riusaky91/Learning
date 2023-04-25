 
import temporizador from "./temporizador.js"; //manejo de modulos exportacion por defecto
import eventos from "./eventos.js";
import { scrollUp, hamburgerMenu, theme, resposiveJavaScript } from "./interfaz.js";//manejo de modulos exportacion de metodos
import contador from "./cuenta_regresiva.js";

const d =
  document; /*guardo la llamada al docuemnt en una variable para simplificar codigo */


d.addEventListener("DOMContentLoaded", (e) => {//Evento para asignar la funcionalidad al cargar la pagina html

  hamburgerMenu(".panel-btn", ".panel", ".menu a"); //Llamo al metodo para hacer un menu de hamburgesa interactivo parametros (el elemento que ejecuta el evento, el elemento que se muestra o se esconde y cualquier enlace que se encuentre dentro de menu)
  temporizador("section1");//Llamo al metodo para crear una alarma, parametro (clase del escenario)
  eventos(".esfera", ".stage");//Llamo al metodo para mover con transform un elemento esfera dentro de un escenario, parametros(clase de la esfera, clase del escenario)
  contador("contador", "27-12-2001");//Llamo al metodo para hacer una cuenta regresiva, parametros (clase del boton, fecha final)
  scrollUp(".up-btn");//LLamo al metodo para subir el scrol al inicio de la pagina, parametro (clase del boton)
  theme(".dark-btn");//Llamo al metodo para cambiar el tema a la pagina web, parametro (clase del boton)
  resposiveJavaScript();//Llamo a el metodo para aplicar un diseño resposive mediante codigo Java Script 

  if (window.matchMedia("(min-width: 400px)").matches) {
    console.log("La pantalla tiene al menos 400 píxeles de ancho");
  } else {
    console.log("La pantalla tiene menos de 400 píxeles de ancho");
  }
});





