
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

    $upButton.addEventListener("click",(e) =>{
        console.log("arriba");
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
  let $boton_theme = d.querySelector(boton_class);//inicializo la variable con el elemento boton
  let $body = d.querySelector('body');//inicializo la variable con le elemnto body del documento

  $boton_theme.addEventListener("click", (e)=>{//cuando hago click en el elemento boton
    $body.classList.toggle("dark-theme");//asigno la clase dark-theme o la elimino dependiendo si existe o no
    $boton_theme.value = '&#9790';
  })
}