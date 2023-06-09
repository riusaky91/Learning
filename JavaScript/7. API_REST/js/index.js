import { xhr } from "./xhr.js"; //manejo de modulos, exportacion de metodos para la interfaz al no ser por defecto se deben usar los corchetes

const d = document;


d.addEventListener("DOMContentLoaded",(e)=>{
    xhr();//CRUD con el objeto XmlHttpRequest
});