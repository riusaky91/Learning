 
import temporizador from "./temporizador.js"; //manejo de modulos exportacion por defecto
import eventos from "./eventos.js";
import { scrollUp, hamburgerMenu, theme } from "./interfaz.js";//manejo de modulos exportacion de metodos
import contador from "./cuenta_regresiva.js";

const d =
  document; /*guardo la llamada al docuemnt en una variable para simplificar codigo */


d.addEventListener("DOMContentLoaded", (e) => {
  //Evento para asignar la funcionalidad al cargar la pagina html

  hamburgerMenu(".panel-btn", ".panel", ".menu a"); //Envio en el metodo el elemento que ejecuta el evento, el elemento que se muestra o se esconde y cualquier enlace que se encuentre dentro de menu
  temporizador("section1");//utilizo el metodo importado temporizador
  eventos(".esfera", ".stage");//utilizo el metodo importado eventos
  contador("contador", "27-12-2001");
  scrollUp(".up-btn");//utilizo el metodo importado scrollUp
  theme(".dark-btn");//utilizo el metodo theme
  console.log(localStorage.getItem("myCat"));
});





