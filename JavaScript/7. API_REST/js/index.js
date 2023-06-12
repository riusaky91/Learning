import { xhr } from "./xhr.js"; //manejo de modulos, exportacion de metodos para la interfaz al no ser por defecto se deben usar los corchetes

const d= document,
    $table = d.querySelector(".crud-table"), 
    $form = d.querySelector(".crud-form"), 
    $title = d.querySelector(".crud-title"), 
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment(); //declaro e inicializo la constante que contiene un fragmento


const getAll = ()=>{
    xhr({
        method: "GET",
        url: "http://localhost:3000/santos",
        success: (res)=>{console.log(res);
            res.forEach(element => {//recorro el obeto javascript generado
                
                
                $template.querySelector(".name").textContent = element.nombre;
                $template.querySelector(".constellation").textContent = element.constelacion;
                $template.querySelector(".edit").dataset.id = element.id;//Creo un data atribute para el elemento editar con el valor del id
                $template.querySelector(".edit").dataset.name = element.nombre;//Creo un data atribute para el elemento editar con el valor del nombre
                $template.querySelector(".edit").dataset.contellation = element.constelacion;//Creo un data atribute para el elemento editar con el valor de la constelacion
                $template.querySelector(".delete").dataset.id = element.id;//Creo un data atribute para el elemento eliminar con el valor del id

                let $clone = d.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template
                $fragment.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
                
            });
            $table.querySelector("tbody").appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li

        },
        error: (err)=>{console.error(err);
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`)
        },
        data: null
    })
}

d.addEventListener("DOMContentLoaded",getAll);//CRUD con el objeto XmlHttpRequest
