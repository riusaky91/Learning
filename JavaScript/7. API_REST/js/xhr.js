
const d= document,
    $table = d.querySelector(".crud-table"), 
    $form = d.querySelector(".crud-form"), 
    $title = d.querySelector(".crud-title"), 
    $template = d.getElementById("crud-template").content,
    $fragment = d.createDocumentFragment(); //declaro e inicializo la constante que contiene un fragmento

export function xhr (){

//Funcion API_REST con el Objeto XMLHttpRequest


    
    
    const xhr = new XMLHttpRequest();//instancia del objeto para hacer un request

        
        
        
    xhr.addEventListener("readystatechange",(e)=>{//Evento que se ejecuta cuando se detecta cualquier cambio de estado
        
        if(xhr.readyState !== 4) return;//si el estado de la request es difernte a 4 no retorne nada
        
        
        
        if(xhr.status >= 200 && xhr.status < 300){//si la peticion tiene un estado satisfactorio
        

            let json = JSON.parse(xhr.responseText);//ddclaro e inicializo la variable json con la respuesta tipo JSON formateada como objeto javascript
            

            json.forEach(element => {//recorro el obeto javascript generado
                
                $template.querySelector(".constellation").setAttribute("id", element.id);
                $template.querySelector(".name").textContent = element.nombre;
                $template.querySelector(".constellation").textContent = element.constelacion;
                let $clone =document.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template
                $fragment.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
                
            });
            

            $table.querySelector("tbody").appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
        }else{//en caso de que la respuesta no se satisfactoria
            
            let message = xhr.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
        }

       //console.log("Este mensaje cargara de cualquier forma");//mensaje que se ejecuta independiente de la respuesta del servidor
            
    })



    xhr.open("GET","http://localhost:3000/santos");//abrir la peticion (metodo y end point(ruta local o web))
        
    xhr.send();//Envio sin datos para consumir

    d.addEventListener("click",(e)=>{
        if(e.target.matches(".delete")){
            console.log(e.target.parentElement.previousElementSibling.id);
            xhr.open("DELETE",`http://localhost:3000/santos/${e.target.parentElement.previousElementSibling.id}`);//abrir la peticion (metodo y end point(ruta local o web))
        
            xhr.send();//Envio sin datos para consumir
        }

    })

}
