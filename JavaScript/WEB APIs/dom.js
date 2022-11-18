
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
console.log("Nodos, Elementos y Selectores");
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