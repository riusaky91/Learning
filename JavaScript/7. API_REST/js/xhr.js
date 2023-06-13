
const d= document;

//Funcion API_REST con el Objeto XMLHttpRequest
export function xhr (options){

    let {method, url, success, error, data } = options;//destruccturacion del objeto en las variables definidas para el proceso
    
    const xhr = new XMLHttpRequest();//instancia del objeto para hacer un request      
        
    xhr.addEventListener("readystatechange",(e)=>{//Evento que se ejecuta cuando se detecta cualquier cambio de estado
        
        if(xhr.readyState !== 4) return;//si el estado de la request es difernte a 4 no retorne nada
        
        if(xhr.status >= 200 && xhr.status < 300){//si la peticion tiene un estado satisfactorio
        
            let json = JSON.parse(xhr.responseText);//declaro e inicializo la variable json con la respuesta tipo JSON formateada como objeto javascript
            
            success(json);//Ejecuto el metodo succes de el objeto enviado como parametro la data con formato JSON
            
        }else{//en caso de que la respuesta no se satisfactoria
            
            let message = xhr.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
            error(`Error ${xhr.status}: ${message}`);//Imprimo y añado el error encontrado al elemento del dom
        }

       //console.log("Este mensaje cargara de cualquier forma");//mensaje que se ejecuta independiente de la respuesta del servidor
            
    })

    xhr.open(method || "GET",url);//abrir la peticion (metodo con corto circuito en caso de no recibir un metodo dejar el GET y end point(ruta local o web))  
    xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");//header de la solicitud
    xhr.send(JSON.stringify(data));//En caso de que se envia data, se convierte esta a tipo texto para que sea plasmada en el docuemnto HTML

}



