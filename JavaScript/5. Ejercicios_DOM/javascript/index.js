import {
  scrollUp,
  hamburgerMenu,
  theme,
  scrollSpy
} from "./interfaz.js"; //manejo de modulos, exportacion de metodos para la interfaz
import temporizador from "./seccion_1_temporizador.js"; //manejo de modulos exportacion por defecto
import eventos from "./seccion_2_eventos.js";
import contador from "./seccion_3_cuenta_regresiva.js";
import resposiveJavaScript  from "./seccion_4_responsive_javascript.js";
import test from "./seccion_5_responsive_tester.js";
import userDeviceInfo from "./seccion_6_deteccion_dispositivos.js";
import networkStatus from "./seccion_7_deteccion_red.js";
import webCam from "./seccion_8_deteccion_camara_web.js";
import geo from "./seccion_9_geolocalizacion.js";
import filtros from "./seccion_10_filtros_busqueda.js";
import sorteoDigital from "./seccion_11_sorteo.js";
import slider from "./seccion_12_carrusel.js";
import videoInteligente from "./seccion_13_video_inteligente.js";
import formulario from "./seccion_14_validacion_formulario.js";


const d =
  document; /*guardo la llamada al docuemnt en una variable para simplificar codigo */

d.addEventListener("DOMContentLoaded", (e) => {
  //Evento para asignar la funcionalidad al cargar la pagina html

  hamburgerMenu(".panel-btn", ".panel", ".menu a"); //Llamo al metodo para hacer un menu de hamburgesa interactivo parametros (el elemento que ejecuta el evento, el elemento que se muestra o se esconde y cualquier enlace que se encuentre dentro de menu)
  temporizador("section1"); //Llamo al metodo para crear una alarma, parametro (clase del escenario)
  eventos(".esfera", ".stage"); //Llamo al metodo para mover con transform un elemento esfera dentro de un escenario, parametros(clase de la esfera, clase del escenario)
  contador("contador", "27-12-2001"); //Llamo al metodo para hacer una cuenta regresiva, parametros (clase del boton, fecha final)
  scrollUp(".up-btn"); //LLamo al metodo para subir el scrol al inicio de la pagina, parametro (clase del boton)
  theme(".dark-btn"); //Llamo al metodo para cambiar el tema a la pagina web, parametro (clase del boton)
  resposiveJavaScript(
    //Llamo a el metodo para aplicar un diseño resposive mediante codigo Java Script //funcion responsive que recibe los parametros (el id del elemento, la media query en css para hacer el paso de video a enlace, contenido html para ver en moviles, contenido html para ver en el escritorio )
    "youtube", //para videos
    "(min-width: 1024px",
    `<a href="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA">ver video</a>`,
    `<iframe src="https://www.youtube.com/watch?v=6IwUl-4pAzc&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );
  resposiveJavaScript(
    //Llamo a el metodo para aplicar un diseño resposive mediante codigo Java Script //funcion responsive que recibe los parametros (el id del elemento, la media query en css para hacer el paso de video a enlace, contenido html para ver en moviles, contenido html para ver en el escritorio )
    "gmaps", //para mapas
    "(min-width: 1024px",
    `<a href="https://goo.gl/maps/X3qMESAhzZDnuVqt8">ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d127256.86897570247!2d-74.18930097855167!3d4.6338036627026415!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f9bdb96095f2f%3A0x40dd01e186b8f55!2sEl%20Campin!5e0!3m2!1ses!2sco!4v1682625126030!5m2!1ses!2sco" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`
  );

  test("responsive-tester");//Llamo al metodo para invocar una ventana con los atributos definidos,parametros (id formulario)
  userDeviceInfo("user-device");//Llamo a la funcion exportable
  webCam("webcam");//Llama al metodo que detecto si hay una camara web conectada y hace stream
  geo("geo");//Llama al metodo para validar la geolocalizacion del punto de red
  scrollSpy();//Llama al metodo para capturar la informacion del scroll y que se vea reflejado en el menu derecho
  videoInteligente();//LLama al metodo ativar o desactivar el video dependiendo de su visualizacion en pantalla
  formulario();//Llama a el metodo para validar los campos del formulario de contacto
});

networkStatus();//Llamo al metodo que valida el estado de conexion de la red 
filtros("#buscador",".cards");//Llamo al metodo para filtrar información desde un buscador, Parametros (input buscador, section de cards)
sorteoDigital("lista","#ganador");//Llamo al metodo para generar un elemento aleatorio de una lista
slider();//Funcion que interactua con el slider