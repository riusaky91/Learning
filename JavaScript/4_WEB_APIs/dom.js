
/*console.log(window);
console.log(document);

let texto = "Bienvenido Marlon al mundo de las APIS"

const hablar = (texto) => speechSynthesis.speak(new SpeechSynthesisUtterance(texto));//Utlizando API del navegador para hablar

hablar(texto);*/


console.log("***************************************************************************************************");
console.log("ELEMENTOS DEL DOCUMENTO");//DOM api de Javascript para interpretar documentos html y xml
console.log(" ");

console.log(document);
console.log(document.head);
console.log(document.body);
console.log(document.documentElement);
console.log(document.doctype);
console.log(document.characterSet);
console.log(document.title);
console.log(document.links);
console.log(document.images);
console.log(document.forms);
console.log(document.styleSheets);
console.log(document.scripts);
console.log(document.getSelection().toString());
document.write("<h2>Hola Mundo desde el DOM</h2>")


console.log("***************************************************************************************************");
console.log("Nodos, Elementos y Selectores");//elementos son las etiquetas html
console.log(" ");

console.log(document.getElementsByTagName("li"));//Trae todos los elmentos del html li --Ya no se utiliza
console.log(document.getElementsByClassName("card"));//trae todos los elementos con clase card --Ya no se utiliza
console.log(document.getElementsByName("nombre"));//trae todos los elementos con name nombre --Ya no se utiliza
console.log(document.getElementById("menu"));//Trae un elemento con id menu //es mas optimo cuando hablamos de iDs utilizar este metodo
console.log(document.querySelector("#menu"));//Trae el primer selector como nodo del tipo que se quiera # =para ids . para clases y [] para data atributes
console.log(document.querySelectorAll("a"));// Devuelve nodos no arreglos en caso de data atributes usar []
console.log(document.querySelectorAll("[data-a]"));//devuelve los elemtos con el dat atribute data-a
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(element => console.log(element));//recorriendo nodos de enlaces
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);//comportamiento de arreglo
console.log(document.querySelectorAll("#menu li"));//Dentro del id menu traer todas las etiquetas li


console.log("***************************************************************************************************");
console.log("Atributos y Data-Attributess");//Manera de consultar, agregar, modificar y eliminar atributos de los elementos HTML 
console.log(" ");


console.log(document.documentElement.lang);//Accediendo al valor atributo lang de la etiqueta html
console.log(document.documentElement.getAttribute("lang"));//otra manera de acceder al valor de un atributo de la etiquieta html
console.log(document.querySelector(".link-dom").href);//trae la url del atributo
console.log(document.querySelector(".link-dom").getAttribute("href"));//trae el valor del atributo forma como se encuentra especificada en el documento
document.documentElement.lang = "es";//modificando valor de atributo --Ya no se utiliza
document.documentElement.setAttribute("lang","es-CO");//modificando el valor de un atributo de forma correcta (atributo, valor)
console.log(document.documentElement.getAttribute("lang"));

const $linkDom = document.querySelector(".link-dom");//declarando constante con el metodo para traer la clase de mi enlace con el DOM $variables del DOM

$linkDom.setAttribute("target", "_blank");//Modificando valores del elemeto añadiendo un nuevo atributo target con su valor _blank al dar click abre el enlace e una nueva ventana o tab
$linkDom.setAttribute("rel", "noopener");//Para evitar que se abran dependencias agenas al dar click en el enlace
$linkDom.setAttribute("href", "https://aprendejavascript.org/");//Modificando el atributo href
console.log($linkDom.hasAttribute("rel"));//validando si exsite el atributo rel dentro del elemento
$linkDom.removeAttribute("rel");//Eliminando atribito del elemento a
console.log($linkDom.hasAttribute("rel"));

//Data atributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);//validado los data-atributes de mi etiqueta
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description= "Modificando data-atribute";//Otra manera de modificar atributo
console.log($linkDom.dataset.description);


console.log("***************************************************************************************************");
console.log("Estilos y variables CSS");//Manera de consultar, agregar, modificar y eliminar propiedades del atributo style para los elementos HTML
console.log(" ");

console.log($linkDom.style);//propiedades ccs validas es recomendable para este caso usar el . para acceder al atributo
console.log($linkDom.getAttribute("style"));//cadena de texto con los atributos modificados 
console.log($linkDom.style.backgroundColor);//se usa el camelCase para acceder al valor de una propiedad css -- Ya no se utiliza
console.log($linkDom.style.getPropertyValue("background-color"));//forma correcta de acceder al valor de una propiedad css
console.log(window.getComputedStyle($linkDom));//Todas las propiedades css del elemento
console.log(getComputedStyle($linkDom).getPropertyValue("Color"));//string rgb del color del a

$linkDom.style.setProperty("text-decoration", "none")//Modificando una propiedad al estilo del elemento quitandole la decoracion del texto, en este caso el subrayado del enlace
$linkDom.style.display = "block";//otro modo de modificar o añadir una propiedad al estilo del el elemnto

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,//acceder a documento html
    $body =document.body;//accediendo al body
let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),//al estar la variable css sobre el root o html se accede desde html
     varYellowColor = getComputedStyle($html).getPropertyValue("--yelow-color");

console.log(varDarkColor);//imprimo el valor de la variable css que se consigue para comprobar
console.log(varYellowColor);

$body.style.setProperty("background-color", varDarkColor);//modificando el fondo del body
$body.style.setProperty("color", varYellowColor);//modificando el color de fuente del body

$html.style.setProperty("--dark-color", "black")//modificando la propiedad de la variable css

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");//accediendo nuevamente a la nueva variable modificada
$body.style.setProperty("background-color", varDarkColor)//Modificando la propiedad de la clase body por la variable indicada.

console.log("***************************************************************************************************");
console.log("Clases CSS");//Manera de consultar, agregar, modificar y eliminar clases del atributo style para los elementos HTML
console.log(" ");

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);//Valor de la clase
console.log($card.classList);//DomtokenList con tres atributos definidores
console.log($card.classList.contains("rotate-45"));//valida si tiene implementada especifica la clase entre las comillas "", devuelve un (boolean)
$card.classList.add("rotate-45");//añadiendo clase 
console.log($card.classList.contains("rotate-45"));//valida si tiene implementada especifica la clase entre las comillas "", devuelve un (boolean)
$card.classList.remove("rotate-45");//quita una clase
$card.classList.toggle("rotate-45");//valida si tiene o no la clase en caso de tenerla la remueve, en caso contrario la agrega
$card.classList.replace("rotate-45", "rotate-135");//Remplaza una clase con otra
$card.classList.add("opacity-80","sepia")//añadiendo mas de una clase
console.log($card.classList);//DomtokenList con tres atributos definidores


console.log("***************************************************************************************************");
console.log("Texto y HTML");//forma de agregar un string al docuemnto HTML
console.log(" ");

const $whatIsDom = document.getElementById("que-es");

let text = ` <p>
El Modelo de Objetos del Documento (<b><i>DOM - Document Object Model </i></b>) es un                    
API para documentos HTML y XML.
</p>
<p>
Éste provée una representación estructural del documento, permitiendo modificar su contenido y presentación visual mediante código JS.
</p>
<p>
    <mark> El DOM no es parte de la especificación de JavaScript, es una API para los navegadores.</mark>
</p>`;


$whatIsDom.textContent = text;//reemplazando contenido textual del <p> caracter a caracter
$whatIsDom.innerHTML = text;//reemplazando contenido del <p> agregando el contenido HTML en un contenedor principal
$whatIsDom.outerHTML = text;//reemplaza el elemento por contenido sin modificaciones ni agregaciones

console.log("***************************************************************************************************");
console.log("Traversing: Recorriendo el DOM");//recorriendo los elementos o etiquetas HTML con el DOM
console.log(" ");

const $cards = document.querySelector(".cards");

console.log($cards);
console.log($cards.children);//Arreglo de Hijos
console.log($cards.parentElement);//padre de elemento
console.log($cards.firstElementChild);//primer elemento hijo
console.log($cards.lastElementChild);//ultimo elemento hijo
console.log($cards.previousElementSibling);//previo elemento hermano 
console.log($cards.nextElementSibling);//siguiente elemento hermano 
console.log($cards.children[3].closest("section"));//Busca el padre mas cercano al elemnto que se detalla en las ""


console.log("***************************************************************************************************");
console.log("Creando Elementos y Fragmentos");//los elementos son la etiquetas del codigo html, los fragmentos se utilizan para agregar una cantidad importante de elementos sin afectar el rendimiento de la aplicacion web
console.log(" ");

const $figure = document.createElement("figure"),//variable que crea elemento figure
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),//Texto de la figcaption tiene que ser tipo node
    $cardts = document.querySelector(".cards");//seleciono la etiqueta que contiene la clase .cards

$img.setAttribute("src", "https://placeimg.com/200/200/animals");//asigno el atributo src al elemento img
$img.setAttribute("alt", "Animals");
$figure.classList.add(".card");//agrego la clase .card al elemento figure
$figcaption.appendChild($figcaptionText);//agrego el nodo de texto a el elemento figcaption
$figure.appendChild($img);//agrego el nodo de imagen al elemento figure
$figure.appendChild($figcaption);//agrego el nodo figcaption al elemento figure
$cardts.appendChild($figure);//agrego el nodo figure al elemento  section que tiene la clase cards


//Tecnica para agregar elementos dinamicamente es costosa en memoria cuando son muchos elementos
const estaciones = ["Primavera", "verano", "otoño"],//arreglo de estaciones
    $ul = document.createElement("ul");//creo un elemento ul


document.body.appendChild($ul);//agrego elemento ul al body
estaciones.forEach(element => {//Tecnica para agregar elementos dinamicamente recorriendo arreglo de estaciones
    const $li = document.createElement("li");//creo un elemento li
    $li.textContent=element;//agrego el texto de mi arreglo al elemento li creado
    $ul.appendChild($li);//agrego el elemento li al elento ul previamente creado
});


//Manejo de fragmentos: Es la forma optima de agregar elementos al DOM

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"],//creo un arreglo de meses del año
    $ul3 = document.createElement("ul"),//creando un elmento ul
    $fragment = document.createDocumentFragment();//creando fragmento


meses.forEach(el =>{//recorro el arreglo creado
    const $li = document.createElement("li");//creo un elemento li
    $li.textContent = el;//agrego el texto de mi arreglo al contenido del texto del elemento li
    $fragment.appendChild($li)//añado el nodo li al fragment
});

$ul3.appendChild($fragment);//añado el fragmento al lu y si hay mas fragmentos los voy añadiendo
document.body.appendChild($ul3);//al final añado el lu y todos los elementos con fragmentos al body de la pagina html

console.log("***************************************************************************************************");
console.log("Templates HTML");//Etiqueta plantilla unica que no se viusaliza en el documento html, sirve para agregar contenido dentro del docuemnto dinamicamente
console.log(" ");

const $cards2 = document.querySelector(".cards"),//variable que trae el elemento con la clase cards
    $template = document.getElementById("template-card").content,//Accedo a el contenido del elemento template de mi html
    $fragment2 = document.createDocumentFragment(),//Creo un fragmento

    cardContent = [//arreglo de objetos con nuevas imagenes y traduccion en español
        {
            title: "Tegnologia",
            img: "https://placeimg.com/200/200/tech"
        },
        {
            title: "Animales",
            img: "https://placeimg.com/200/200/animals"
        },
        {
            title: "gente",
            img: "https://placeimg.com/200/200/people"
        },
        {
            title: "arquitectura",
            img: "https://placeimg.com/200/200/arch"
        },
        {
            title: "Naturaleza",
            img: "https://placeimg.com/200/200/nature"
        }
    ];

    cardContent.forEach(el =>{//recorro mi arreglo
        $template.querySelector("img").setAttribute("src", el.img);//le añado a el elemento img de mi template src
        $template.querySelector("img").setAttribute("alt", el.title);//le añado a el elemento alt de mi template title
        $template.querySelector("figcaption").textContent = el.title;//le añado al texto de mi figcaption el.title (esta etiqueta no cuenta con atributos por eso se usa el punto)

        let $clone =document.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template

        $fragment2.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
    })

    $cards2.appendChild($fragment2);//agrego el fragmento a la clase cards para pintar el DOM

console.log("***************************************************************************************************");
console.log("Modificando Elementos"); //Nueva y mejor forma de agregar eliminar reemplazar elementos dentro de el documento html
console.log(" ");

/* 

.insertAdjacent... Insertar de manera adyacente elementos

    .insertAdjacentElement(position,el)
    .insertAdjacentHTML(position,html)
    .insertAdjacentText(position,text)


posiciones:

    beforebegin (hermano anterior)
    afterbegin (primer hijo)
    beforeend (ultimo hijo)
    afterend  (hermano siguiente)

*/

const $cardsTest = document.querySelector(".cards"),//asignado clase card en una variable
    $newCard = document.createElement("figure");//creando un elemento

    //Imagen aleatoria
    let $contenCard = `
        <img src = "https://placeimg.com/200/200/any" alt= "Any">
        <figcaption></figcaption>
    `;

    $newCard.classList.add(".card");//añadiendo clase
    $newCard.insertAdjacentHTML("beforeend",$contenCard);//Insertando atributos html al hermano anterior
    $newCard.querySelector("figcaption").insertAdjacentText("afterbegin","Any")//insertano texto al elemeto figcaption su primer hijo
    $cardsTest.insertAdjacentElement("afterbegin",$newCard);//insertar como primer hijo el elemento creado

    //Otra forma de insercion
    /*
    $cardsTest.prepend($newCard);
    $cardsTest.append($newCard);
    $cardsTest.before($newCard);
    $cardsTest.after($newCard);
    */


console.log("***************************************************************************************************");
console.log("Manejadores de eventos"); //Funciones que se ejecutan en un evento, los eventos son las Acciones del usuario en el docuemnto HTML 
console.log(" ");

function holaMundo(){//Event Handler 
    alert("Hola Mundo");
    console.log(event);//descripcion del evento click deprecado
}

const $eventoSemantico = document.getElementById("evento-semantico"),
$eventoMultiple = document.getElementById("evento-multiple");

$eventoSemantico.onclick = holaMundo;//se asigna al evento onclick la funcion hola mundo sin los parentesis ya que al colocarlos se ejecutara en el init la funcion 
//solo se puede asignar una funcion a un evento con los manejadores semanticos
$eventoSemantico.onclick = function (e) {//la e es el evento en si y solo puede recibir un parametro
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
}

$eventoMultiple.addEventListener("click",holaMundo);//añado en el evento click el metodo holamundo
$eventoMultiple.addEventListener("click",(e)=>{//añado en el evento click  otro metodo anonimo
alert("Hola mundo manejador de eventos multiples")
console.log(e)});

console.log("***************************************************************************************************");
console.log("Eventos con Parámetros y Remover Eventos"); //para usar funciones manejadoras con parametros una funciona anonima
console.log(" ");

function saludar (nombre = "Desconocid@") {
    alert(`Hola ${nombre}`);
}

$eventoMultiple.addEventListener("click",holaMundo);//añado en el evento click el metodo holamundo
$eventoMultiple.addEventListener("click",(e)=>{alert("Hola mundo manejador de eventos multiples")//añado en el evento click  otro metodo anonimo
console.log(e)});

$eventoMultiple.addEventListener("click",()=>saludar());//Forma de ejecutar una funcion manejadora con parametros diferentes al evento

const $eventoRemover = document.getElementById("evento-remover");//referenciando elemento boton en una variable

const removeDobleClick = (e)=>{//Funcion para remover evento
    alert(`Removiendo el evento de tipo ${e.type}`)
    console.log(e);//imprimo el evento
    $eventoRemover.removeEventListener("dblclick",removeDobleClick)//funcion para remover un elemento, esta funcion se auto referencia
    $eventoRemover.setAttribute("disabled", true);//atributo html deshabilitando boton

}

$eventoRemover.addEventListener("dblclick",removeDobleClick);//agregando evento con una funcion que despues de ejecutarse elimina el evento


console.log("***************************************************************************************************");
console.log("Flujo de eventos Burbuja y Captura"); //Propagación de un evento que se origina a lo largo del arbol del DOM. Por defecto la propagación del elemento mas interno al mas externo es la fase de burbuja
console.log(" ");


const $divsEventos = document.querySelectorAll(".eventos-flujo div");//Trae todas las divs que estan dentro de eventos flujo

console.log($divsEventos);
/*
function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);//referenciando al nombre de la clase del div y el objeto que origino el evento con su nombre de clase
}
*/

$divsEventos.forEach(div => {//asignado evento porcada elemento del arreglo de nodos
//Fase de Burbuja
//    div.addEventListener("click", flujoEventos,false);//Fase Burbuja se activa en el 3 parametro como false y fase de captura se asigna el valor true
//Fase de captura

//div.addEventListener("click", flujoEventos,true);//fase de captura del elemento mas externo al elemento mas interno

/*div.addEventListener("click", flujoEventos,{//tambien en el tercer parametre se puede a;adir un objeto con las siguientes caracteristicas
    capture: false,    //asignando fase de burbuja
    once: true // el evento solo se ejecutara una vez
});
*/
});


console.log("***************************************************************************************************");
console.log("stopPropagation & preventDefault"); //Interrupcion de la propagacion de eventos burbuja o captura / cancela la accion que tiene por defecto el elemento 
console.log(" ");

const $linksEventos = document.querySelector(".eventos-flujo a");//capturo la lista de nodos de el elemento con la clase evento-flujo
/*
function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);//referenciando al nombre de la clase del div y el objeto que origino el evento con su nombre de clase

    e.stopPropagation();//Con este metodo detengo la propagación de mi evento a los padres 
}
*/
/*

$divsEventos.forEach(div => {//asignado evento porcada elemento del arreglo de nodos
    //Fase de Burbuja
        div.addEventListener("click", flujoEventos);//Fase Burbuja se activa por defecto o en el 3 parametro como false y fase de captura se asigna el valor true
    
    });
*/
/*
$linksEventos.addEventListener("click", (e) => {
    alert("redireccionando a la pagina de google");
    e.preventDefault();// cancela la accion que tiene por defecto el elemento a y se ejecuta solo la accion del handler
});
*/

console.log("***************************************************************************************************");
console.log("Delegación de Eventos"); //genero un unico listener asociado al elemento o nodo padre que asignara los eventos que se quieran relacionar por defecto no se propaga, forma correcta y optimizada de hacer los 4 items anteriores
console.log(" ");

document.addEventListener("click",(e)=>{//asignado el eventolistener al documento html
    console.log(`click en ${e.target}`);

    if(e.target.matches(".eventos-flujo div")){//Si el elemento que origina el click dentro del document es un div dentro de la clase eventos-flujo
        alert("redireccionando a la pagina de google");//imprime alerta
        console.log(`Hola te saluda ${this}, el click lo originó ${e.target.className}`);//referenciando al objeto global del document (window) y el objeto que origino el evento con su nombre de clase
    }

    if(e.target.matches(".eventos-flujo a")){//Si el elemento que origina el click dentro del document es un a dentro de la clase eventos-flujo
        alert("redireccionando a la pagina de google");//imprime alerta
        e.preventDefault();// cancela la accion que tiene por defecto el elemento a y se ejecuta solo la accion del handler (alert)
    }
});

console.log("***************************************************************************************************");
console.log("BOM: Propiedades y eventos"); //Eventos de la ventana del navegador objeto window
console.log(" ");

/*
window.addEventListener("resize", e =>{//evento que se ejecuta cuando redimenciono la ventana del navegador
    console.clear();
    console.log("Eveto resize");
    console.log(window.innerWidth);//Tamaño ventana
    console.log(window.innerHeight);
    console.log(window.outerWidth);//Tamaño con el navegador
    console.log(window.outerHeight);
    console.log(e);
});

window.addEventListener("scroll", e =>{//evento que se ejecuta utilizo el scroll
    console.clear();
    console.log("Eveto scroll");
    console.log(window.scrollX);
    console.log(window.scrollY);
    console.log(e);
});


window.addEventListener("load", e=>{//evento que se ejecuta cuando se recarga la pagina espera a que se carguen los estilos
    
    console.log("Evento Load");
    console.log(window.screenX);//al usar otra pantalla salen numeros negativos
    console.log(window.screenY);
    console.log(e);
});

window.addEventListener("DOMContentLoaded", (e) => {//eveto mas rapido y estable que load se utiliza mejor practica no espera a los css 
    
    console.log("Evento DOMContentLoaded");
    console.log(window.screenX);//al usar otra pantalla salen numeros negativos
    console.log(window.screenY);
    console.log(e);
})

*/
console.log("***************************************************************************************************");
console.log("BOM: Metodos"); //Metodos del BOM en los cuales no es necesario añadir la palabra window
console.log(" ");

//window.alert("Alerta");//Envia una alerta al navegador apenas se carge
//window.confirm("confirmación");//Envia una alerta con aceptar y cancelar al navegador apenas se cargue
//window.prompt("Aviso");//Envia una alerta con aceptar y cancelar al navegador apenas se cargue con una caja de texto par aingresar un dato

const $btnAbrir = document.getElementById("abrir-ventana"), 
    $btnCerrar = document.getElementById("cerrar-ventana"),
    $btnImprimir = document.getElementById("imprimir-ventana");

    let ventana;//variable para alamacenar una ventana
    
    $btnAbrir.addEventListener("click", e =>{
        ventana = window.open("https://www.google.com.co");//metodo para abrir una nueva ventana y direccionar al enlace indicado referencio una variable a la nueva ventana -- NOTA no es necesario añadir el objeto window
    });

    $btnCerrar.addEventListener("click", e =>{
        ventana.close();//metodo para cerrar una ventana en este caso la ventana referenciada
    });

    $btnImprimir.addEventListener("click", e =>{
        window.print();//metodo para mandar a imprimir la ventana -- NOTA no es necesario añadir el objeto window
    });


console.log("***************************************************************************************************");
console.log("BOM: Objetos: URL, Historial y Navegador"); //funcionalidades del componente window utiles para diferentes propositos
console.log(" ");

console.log("Objetos: URL");

console.log(location);//URL origen
console.log(location.origin);//origen de url 
console.log(location.protocol);//protocolo direccionamiento IP
console.log(location.host);//Dominio y puerto
console.log(location.hostname);//Dominio
console.log(location.port);//puerto
console.log(location.href);//URL completa
console.log(location.hash);//detecta el valor de la URL que esta despues del Hash # SWA
console.log(location.pathname);//pagina puntual que estoy consultando

console.log("Objetos: Historial");

console.log(window.history);//almacenamiento del historal donde se encuentra el length indica la cantidad de paginas donde se han navegado
//history.go(2)//avanza dos paginas en el historial

console.log("Objetos: Navigator");

console.log(navigator);//objeto de las funcionalidades del navegador
console.log(navigator.geolocation);//geolocalización
console.log(navigator.mediaDevices);//dispositivos camaras y microfonos
console.log(navigator.mimeTypes);//tipos de formato que soporta el navegador
console.log(navigator.onLine);//saber si el navegador pierde la conexion online
console.log(navigator.serviceWorker);//API que sirve convertir el PWA los sitieos web convertir en una aplicación instalable
console.log(navigator.storage);//API de almacenamiento 
console.log(navigator.usb);//identificar si se conectan o se desconectan los dispositivos USB
console.log(navigator.userAgent);//información sobre el dispositivo y el navegador de donde se esta consultando la información
