export default function temporizador (seccion) { 
    
const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */

const $reloj = d.getElementById("reloj");//genero variable que referencia al elemento (boton) con el id reloj
const $alarma = d.getElementById("alarma");//genero variable que referencia al elemento (boton) con el id alarma
let temporizador;//variavle que contendra el metodo set interval

d.getElementById(seccion).addEventListener("click", (e) => {//metodo que escucha cualquier click sobre la sección 1
    if (e.target.matches("#iniciar-reloj")) {
      
      e.target.setAttribute('disabled', '');//deshabilito el elemnto que genero el click
      temporizador = setInterval(()=>{//Metodo que ejecuta indefinidamente un bloque de codigo cada cierto intervalo de tiempo
        $reloj.textContent = new Date().toLocaleTimeString();//imprime en el h2 la hora actual cada segundo
      },1000)//Tiempo de ejecucion en milisegundos
  
    }
  
    if (e.target.matches("#detener-reloj")) {
      
      e.target.previousElementSibling.removeAttribute('disabled');//remuevo el atributo disbled al elemento con el id iniciar-reloj
      clearTimeout(temporizador);//Limpia y detiene el temporizador creado
      $reloj.textContent = "";//limpio el h2 de texto
    }
  
    if (e.target.matches("#iniciar-alarma")) {
  
      $alarma.play();//Inicializo el audio referenciado
      e.target.setAttribute('disabled', '');//deshabilito el elemnto que genero el click
  
    }
    if (e.target.matches("#detener-alarma")) {
  
      e.target.previousElementSibling.removeAttribute('disabled');//remuevo el atributo disbled al elemento con el id iniciar-alarma
      $alarma.pause();//detengo el audio referenciado
    }
  });

}


