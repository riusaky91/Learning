
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
console.log("Nodos, Elementos y Selectores");//DOM
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