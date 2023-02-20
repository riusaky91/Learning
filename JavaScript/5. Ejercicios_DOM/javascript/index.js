
import hamburgerMenu, {animacion} from "./hamburgesa.js";//importación del metodo animacion



  const $hamburgers = document.querySelectorAll(".hamburger");//capturo en una variable el arreglo de nodos de todos los elementos hamburger  
  const $menu = document.getElementById("menu");
     
  if ($hamburgers.length > 0) {
    animacion($hamburgers, function (hamburger) {//utilizo el metodo de animar con 3 parametros
      hamburger.addEventListener("click",function () {//añado in metodo al evento click 
          this.classList.toggle("is-active");//activo la animacion del hamburger
          
          
          $menu.classList.toggle("menu");
          
        },
        false
      );
    });
  }

