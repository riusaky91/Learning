import hamburgerMenu from "./hamburgesa.js"; //importación del metodo animacion
import temporizador from "./temporizador.js";

const d =
  document; /*guardo la llamada al docuemnt en una variable para simplificar codigo */

d.addEventListener("DOMContentLoaded", (e) => {
  //Evento para asignar la funcionalidad al cargar la pagina html

  hamburgerMenu(".panel-btn", ".panel", ".menu a"); //Envio en el metodo el elemento que ejecuta el evento, el elemento que se muestra o se esconde y cualquier enlace que se encuentre dentro de menu
});


temporizador("section1");


