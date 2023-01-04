
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
console.log(document.querySelector("#menu"));//Trae el primer selector como nodo del tipo que se quiera # =para ids . para clases
console.log(document.querySelectorAll("a"));// Devuelve nodos no arreglos
console.log(document.querySelectorAll("a").length);
document.querySelectorAll("a").forEach(element => console.log(element));//recorriendo nodos de enlaces
console.log(document.querySelector(".card"));
console.log(document.querySelectorAll(".card")[2]);//comportamiento de arreglo
console.log(document.querySelectorAll("#menu li"));//Dentro del id menu tarer todas las etiquetas li


console.log("***************************************************************************************************");
console.log("Atributos y Data-Attributess");
console.log(" ");


console.log(document.documentElement.lang);//Accediendo al valor atributo lang de la etiqueta html
console.log(document.documentElement.getAttribute("lang"));//otra manera de acceder al valor de un atributo de la etiquieta html
console.log(document.querySelector(".link-dom").href);//trae la url del atributo
console.log(document.querySelector(".link-dom").getAttribute("href"));//trae el valor del atributo forma correcta
document.documentElement.lang = "es";//modificando valor de atributo
document.documentElement.setAttribute("lang","es-CO");//modificando el valor de un atributo de forma correcta
console.log(document.documentElement.getAttribute("lang"));

const $linkDom = document.querySelector(".link-dom");//declarando constante con el metodo para traer la clase de mi enlace con el DOM $variables del DOM

$linkDom.setAttribute("target", "_blank");//Modificando valores de la etiqueta añadiendo un nuevo atributo
$linkDom.setAttribute("rel", "noopener");//Para evitar que se abran dependencias agenas
$linkDom.setAttribute("href", "https://aprendejavascript.org/");
console.log($linkDom.hasAttribute("rel"));//vlaidando si exsite el atributo
$linkDom.removeAttribute("rel");
console.log($linkDom.hasAttribute("rel"));

//Data atributes

console.log($linkDom.getAttribute("data-description"));
console.log($linkDom.dataset);//validado los data-atributes de mi etiqueta
console.log($linkDom.dataset.description);
$linkDom.setAttribute("data-description", "Modelo de objeto del documento");
console.log($linkDom.dataset.description);
$linkDom.dataset.description= "Modificando data-atribute"
console.log($linkDom.dataset.description);


console.log("***************************************************************************************************");
console.log("Estilos y variables CSS");
console.log(" ");

console.log($linkDom.style);//propiedades ccs validas es recomendable para este caso usar el . para acceder al atributo
console.log($linkDom.getAttribute("style"));//cadena de texto con los atributos modificados 
console.log($linkDom.style.backgroundColor);//se usa el camelCase para acceder al valor
console.log(window.getComputedStyle($linkDom));//propiedades por defecto del CSS 
console.log(getComputedStyle($linkDom).getPropertyValue("Color"));

$linkDom.style.setProperty("text-decoration", "none")//Modificando elemento de mi atributo style
$linkDom.style.display = "block";//otro modo de modificar elemnto del atributo

//Variables CSS - Custom Properties CSS

const $html = document.documentElement,//acceder al html
    $body =document.body;//accediendo al body
    let varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color"),//al estar la variable css sobre el root o html se accede desde html
     varYellowColor = getComputedStyle($html).getPropertyValue("--yelow-color");

console.log(varDarkColor);//imprimo el valor que se consigue para comprobar
console.log(varYellowColor);

$body.style.backgroundColor= varDarkColor;//modificando el fondo del body
$body.style.color = varYellowColor;

$html.style.setProperty("--dark-color", "black")//modificando la propiedad de la variable css

varDarkColor = getComputedStyle($html).getPropertyValue("--dark-color");//accediendo nuevamente a la nueva variable modificada
$body.style.setProperty("background-color", varDarkColor)//seteando la propiedad actualizada

console.log("***************************************************************************************************");
console.log("Clases CSS");
console.log(" ");

const $card = document.querySelector(".card");

console.log($card);
console.log($card.className);//Valor de la clases 
console.log($card.classList);//DomtokenList con tres atributos definidores
console.log($card.classList.contains("rotate-45"));//valida si tiene implementada la clase (boolean)
$card.classList.add("rotate-45");//añadiendo clase 
console.log($card.classList.contains("rotate-45"));
$card.classList.remove("rotate-45");//quita un clase
$card.classList.toggle("rotate-45");//valida si tiene o no la clase en caso de tenerla no agrega nada, en caso contrario si agrega la clase dark mode
$card.classList.replace("rotate-45", "rotate-135");//Remplaza una clase con otra
$card.classList.add("opacity-80","sepia")//añadiendo mas de una clase

console.log("***************************************************************************************************");
console.log("Texto y HTML");
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


$whatIsDom.textContent = text;//reemplazando contenido textual del <p>
$whatIsDom.innerHTML = text;//reemplazando contenido del <p> adaptando el contenido HTML en un contenedor general
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
console.log($cards.children[3].closest("section"));//Busca el padre mas cercano que se detalla


console.log("***************************************************************************************************");
console.log("Creando Elementos y Fragmentos");//los elemento son la etiquietas del codifo html los fragmentos se utilizan para agregar una cantidad importante de elementos sin afectar ele rendimiento de la aplicacion web
console.log(" ");

const $figure = document.createElement("figure"),//variable que crea elemento figure
    $img = document.createElement("img"),
    $figcaption = document.createElement("figcaption"),
    $figcaptionText = document.createTextNode("Animals"),//Texto de la figcaption
    $cardts = document.querySelector(".cards");//seleciono la etiqueta que contiene la clase .cards

$img.setAttribute("src", "https://placeimg.com/200/200/animals");//asigno el atributo src al elemento img
$img.setAttribute("alt", "Animals");
$figure.classList.add(".card");//agrego la clase .card al elemento figure
$figcaption.appendChild($figcaptionText);//agrego el nodo de texto a el elemento figcaption
$figure.appendChild($img);//agrego el nodo de imagen al elemento figure
$figure.appendChild($figcaption);//agrego el nodo figcaption al elemento figure
$cardts.appendChild($figure);//agrego el nodo figure al elemento  section que tiene la clase cards


//Tecnica para agregar elementos dinamicamente es costsa en memoria cuando son muchos elementos
const estaciones = ["Primavera", "verano", "otoño"],
    $ul = document.createElement("ul");

document.body.appendChild($ul);
estaciones.forEach(element => {//Tecnica para agregar elementos dinamicamente
    const $li = document.createElement("li");
    $li.textContent=element;
    $ul.appendChild($li);
});


//Manejo de fragmentos la forma optima de agregar elementos al DOM

const meses = ["enero", "febrero", "marzo", "abril", "mayo", "junio", "julio"],
    $ul3 = document.createElement("ul"),//creando un elmento ul
    $fragment = document.createDocumentFragment();//creando fragmento


meses.forEach(el =>{//recorro el arreglo crweado
    const $li = document.createElement("li");//creo un elemento li
    $li.textContent = el;//añado el nodo texto a mi elemento
    $fragment.appendChild($li)//añado el nodo li al fragment
});

$ul3.appendChild($fragment);//añado el fragmento al lu
document.body.appendChild($ul3);//añado el lu al body de la pagina html

console.log("***************************************************************************************************");
console.log("Templates HTML");
console.log(" ");

const $cards2 = document.querySelector(".cards"),//variable que trae el elemento con la clase cards
    $template = document.getElementById("template-card").content,//Accedo a el contenido del elemento template de mi html
    $fragment2 = document.createDocumentFragment(),//Creo un fragmento

    cardContent = [//arreglo con nuevas imagenes en español
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
        $template.querySelector("figcaption").textContent = el.title;//le añado al texto de mi figcaption title

        let $clone =document.importNode($template, true);//Clonando toda la estructura interna previamente creada

        $fragment2.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
    })

    $cards2.appendChild($fragment2);//agrego el gragmento a la clase cards para pintar el DOM

console.log("***************************************************************************************************");
console.log("Modificando Elementos"); //Nueva forma de agregar eliminar reemplazar elñementos dentro de el documento html
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

$eventoSemantico.onclick = holaMundo;//se asigna al evento onclick la funcion hola mundo sin los parentesis ya que al colocarlos se ejecurar en el init la funcion 
//solo se puede asignar una funcion a un evento con los manejadores semanticos
$eventoSemantico.onclick = function (e) {//la e es el evento en si y solo puede recibir un parametro
    alert("Hola mundo manejador de eventos semantico");
    console.log(e);
}

$eventoMultiple.addEventListener("click",holaMundo);//añado en el evento click el metodo holamundo
$eventoMultiple.addEventListener("click",(e)=>{alert("Hola mundo manejador de eventos multiples")//añado en el evento click  otro metodo anonimo
console.log(e)});

console.log("***************************************************************************************************");
console.log("Eventos con Parámetros y Remover Eventos"); //para usar funciones manejadoras con parametros se una una funciona anonima
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
    $eventoRemover.removeEventListener("dblclick",removeDobleClick)//funcion pra remover un elemento que se auto referencia
    $eventoRemover.disabled = true;//atributo html deshabilitando boton

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

function flujoEventos(e) {
    console.log(`Hola te saluda ${this.className}, el click lo originó ${e.target.className}`);//referenciando al nombre de la clase del div y el objeto que origino el evento con su nombre de clase

    e.stopPropagation();//Con este metodo detengo la propagación de mi evento a los padres 
}

$divsEventos.forEach(div => {//asignado evento porcada elemento del arreglo de nodos
    //Fase de Burbuja
        div.addEventListener("click", flujoEventos);//Fase Burbuja se activa por defecto o en el 3 parametro como false y fase de captura se asigna el valor true
    
    });


$linksEventos.addEventListener("click", (e) => {
    alert("redireccionando a la pagina de google");
    e.preventDefault();// cancela la accion que tiene por defecto el elemento a y se ejecuta solo la accion del handler
});


console.log("***************************************************************************************************");
console.log("Delegación de Eventos"); //genero un unico liscener asociado al elemento padre que asignara los eventos que se quieran asignar
console.log(" ");



