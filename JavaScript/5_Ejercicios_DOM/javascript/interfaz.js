
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

export function scrollSpy() {//Deteccion de elementos section que interactuan con el menu

  const $sections = d.querySelectorAll("section[data-scroll-spy]");//declaro e inicializo constante con los elementos que tengan la clase section y el data atribute data-scroll-spy

  const cb = (entradas) => {//callback para usar en el observer
      

      entradas.forEach((entrada)=>{//recorro cada entrada
          //console.log(entrada);
          const id = entrada.target.getAttribute("id");
          //console.log(id);
          if (entrada.isIntersecting) {//si ya se mostro en pantalla el elemento
              d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");//busca el primer elemento que sea un enlace que tenga el data atribute data-scrill-spy y que en su atributo hreft tenga el valor de id (sectionX) y añadale la clase active
          }else{
              d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");//busca el primer elemento que sea un enlace que tenga el data atribute data-scrill-spy y que en su atributo hreft tenga el valor de id (sectionX) y quitale la clase active
          }
      })
  }

  const observer = new IntersectionObserver(cb, {
      //Paramentros del intersection observer
      //root: toma por defectoel document
      //rootMargin: "-250px"//margen de foco en los cuatro lados zona interactiva de iteraccion
      threshold: [0.5, 0.75],//cuando el elemento tiene visible el 50%  y el 75% de su contenido
  });//Recibe callback que se va ejecutar cuando este observado y sus parametros de opciones

  $sections.forEach((el) =>{//recorro el arreglo sections
      observer.observe(el);//ejecuto el observador sobre cada elemento de mi arreglo sections
  })

} 

