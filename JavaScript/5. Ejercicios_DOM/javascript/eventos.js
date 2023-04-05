  
  export default function eventos($esfera, $escenario){
  
    const d = document; /*guardo la llamada al document en una variable para simplificar codigo */
    $esfera = d.querySelector($esfera);//capturo el elemento esfera creado en el documento
    $escenario = d.querySelector($escenario);//capturo el elemento escenario creado en el documento
    let y = 0, x = 0;

  d.addEventListener("keydown", (e)=>{//evento que se ejecuta cuando presiono una tecla en el teclado
    
    if(e.key === "ArrowUp"){//si presiono la flecha arriba
        e.preventDefault()//Metodo que elimina los eventos poor defecto del navegador
        y--;//disminuyo el valor del eje y
    }

    if(e.key === "ArrowDown"){//si presiono la flecha abajo

      e.preventDefault()//Metodo que elimina los eventos poor defecto del navegador
      y++;//aumento el valor del eje y
    }
    if(e.key === "ArrowRight"){//si presiono la flecha derecha
        e.preventDefault()//Metodo que elimina los eventos poor defecto del navegador
        x++;//aumneto el valor del eje x
    }
    if(e.key === "ArrowLeft"){//si presiono la flecha izquierda
        e.preventDefault()//Metodo que elimina los eventos poor defecto del navegador
        x--;//disminuyo el valor del eje x
    }
    if(e.altKey && e.key === "c"){//si presiono la combinación de teclas alt+c

      alert("combinacion de confimacion")
    }

    $esfera.style.setProperty("transform", `translate(${x*10}px,${y*10}px)`); //modifico el valor de la propiedad transform del elemento esfera es su translate
    
  })}