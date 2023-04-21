
const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */

export function hamburgerMenu(panelBtn, panel, menuLink){//funcion exportable por defecto con tres parametros de entrada 
    

    d.addEventListener("click",(e)=>{//utilizo el evento click
      if (e.target.matches(panelBtn) || e.target.matches(`${panelBtn} * `)) {/*si el objeto que origina el evento coincide con la variable panelbtn o si concide con cualquier elemento hijo * del panelbtn*/
        d.querySelector(panel).classList.toggle("is-active");//Busca el selector del panel y agrega la clase is-active si no existe o al contrario
        d.querySelector(panelBtn).classList.toggle("is-active");//Busca el selector del panelbtn y agrega la clase is-active si no existe o al contrario
      }

      if (e.target.matches(menuLink)){/*si el objeto que origina el evento coincide con la variable menulink*/
        d.querySelector(panel).classList.remove("is-active");//Busca el selector del panel y elimina la clase is-active 
        d.querySelector(panelBtn).classList.remove("is-active");//Busca el selector del panelbtn y elimina la clase is-active
      }
    })
  }


export function scrollUp(boton) {//funcion exportable por defecto con un parametro de entrada
    

    let $upButton = d.querySelector(boton);//capturo el elemento boton up del documento

    d.addEventListener("click",e=>{//cuando hago click en el docuemnto NOTA: (recomedado utilizar el documento)
      if(e.target.matches(boton) || e.target.matches(`${boton} *`))//en caso de que el elemento en donde se hace click sea el boton dark o cualquien eleneto interno del boton
      {
        console.log("arriba");
      }
    })



    window.addEventListener("scroll", e =>{//evento que captura el movimiento del scrool de la ventana
        if(d.documentElement.scrollTop > 300){//si el parametro ScrollTop (nuero de pixeles entre el tope de la ventana y el scroll) del documento es mayor a 300
            $upButton.classList.remove("hidden");//elimino la clase hidden del boton 
        }else{
            $upButton.classList.add("hidden");//añado la clase hidden del botton
        }
    })
}


export function theme (boton_class) {//funcion exportable que recibe la clase de un boton
  let $selectors = d.querySelectorAll("[data-dark]");//inicializo la variable con el nodo de elementos que contiene el data atribute data-dark
  let $imagen_boton = d.querySelector(boton_class).firstElementChild;

  d.addEventListener("click", (e)=>{//cuando hago click en el docuemnto NOTA: (recomedado utilizar el documento)
    if(e.target.matches(boton_class)|| e.target.matches(`${boton_class} *`)){//en caso de que el elemento en donde se hace click sea el boton dark o cualquien eleneto interno del boton

      localStorage.setItem("myCat", "Tom");

      for (const i of $selectors) {//recorro el nodo de elementos
        i.classList.toggle("dark-theme");//asigno o elimino la clase dark-mode dependiendo si se eencuentra o no
      }

      $imagen_boton.getAttribute("src")==`assets\\luna.png`?$imagen_boton.src = "assets\\sol.png":$imagen_boton.src = "assets\\luna.png";//si enceuntra en el src de la imagen la luna la deja como esta si no lo encuentra lo cambioa por el sol

    }
  })
}