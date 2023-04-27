
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

 
  if(localStorage.getItem("tema")=="oscuro"){//si la variable del local storage es
    for (const i of $selectors) {//recorro el nodo de elementos con el data atribute data-dark
      i.classList.toggle("dark-theme");//asigno o elimino la clase dark-mode dependiendo si se eencuentra o no
    }
    $imagen_boton.src = "assets\\sol.png";
  }

  d.addEventListener("click", (e)=>{//cuando hago click en el docuemnto NOTA: (recomedado utilizar el documento)
    if(e.target.matches(boton_class)|| e.target.matches(`${boton_class} *`)){//en caso de que el elemento en donde se hace click sea el boton dark o cualquien eleneto interno del boton

      for (const i of $selectors) {//recorro el nodo de elementos con el data atribute data-dark
        i.classList.toggle("dark-theme");//asigno o elimino la clase dark-mode dependiendo si se eencuentra o no
      }

      if( $imagen_boton.getAttribute("src")==`assets\\luna.png`){//si encuentra en el src de la imagen la luna la deja como esta si no lo encuentra lo cambia por el sol
        $imagen_boton.src = "assets\\sol.png";//cambio el atributo src de la imagen del boton
        localStorage.setItem("tema", "oscuro");//asigno a la variable del navegador tema = oscuro 
      }else{
        $imagen_boton.src = "assets\\luna.png";//cambio el atributo src de la imagen del boton
        localStorage.setItem("tema", "claro");//asigno a la variable del navegador tema = claro 
      }

    }
  })
}

//Responsable responsive desing
export function resposiveJavaScript(id, mediaQuery, mobileContent, desktopContent){//funcion responsive que recibe los parametros (el id del elemento, la media query en css para hacer el paso de video a enlace, contenido html para ver en moviles, contenido html para ver en el escritorio )
  
  
  let breakpoint = window.matchMedia(mediaQuery);//variable que se inicializa con el valor de la media query css para el objeto window machmedia 
  
  const responsive = (e)=>{//funcion expresada que recibe el evento de la mediaQuey
    if(e.matches){//si el evento de la media query se cumple 
      d.getElementById(id).innerHTML = desktopContent;
    } else{//si el evento de la media query no se cumple
      d.getElementById(id).innerHTML = mobileContent;
    }
    console.log(e.matches);
  }

  responsive(breakpoint);//utilizo el metodo responsive con el parametro media query para dar un valor inicial
  breakpoint.addEventListener("change",responsive);//Cada vez que cambie el estado de la media query se ejecuta la funcion responsive que recibe como parametro el evento del metodo addevent listener

  
  
  
}