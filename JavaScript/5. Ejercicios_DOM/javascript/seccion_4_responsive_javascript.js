//Responsable responsive desing
export default function resposiveJavaScript(id, mediaQuery, mobileContent, desktopContent){//funcion responsive que recibe los parametros (el id del elemento, la media query en css para hacer el paso de video a enlace, contenido html para ver en moviles, contenido html para ver en el escritorio )
  
    const d =
    document; /*guardo la llamada al docuemnt en una variable para simplificar codigo */
  
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