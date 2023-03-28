
import hamburgerMenu from "./hamburgesa.js";//importación del metodo animacion
import temporizador from "./temporizador.js";

  const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */

  d.addEventListener("DOMContentLoaded",e=>{//Evento para asignar la funcionalidad al cargar la pagina html
    
    hamburgerMenu(".panel-btn", ".panel", ".menu a")//Envio en el metodo el elemento que ejecuta el evento, el elemento que se muestra o se esconde y culaquier enlace que se encuentre dentro de menu
  });

  const $cardsTest = d.getElementById("section1");
  const $newCard = document.createElement("figure");//creando un elemento
  $newCard.classList.add(".card");//añadiendo clase
    
    
    $cardsTest.insertAdjacentText("afterbegin",$newCard);//insertar como primer hijo el elemento creado


  d.getElementById("tt").addEventListener("click", e=>{
    console.log(e,"object");
    alert("fff")

  });


  temporizador();

  