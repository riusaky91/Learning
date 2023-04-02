

  export default function hamburgerMenu(panelBtn, panel, menuLink){//funcion exportable por defecto con tres parametros de entrada 
    const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */

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