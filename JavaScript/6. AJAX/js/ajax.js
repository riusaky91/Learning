//Funcion anonima auto ejecutable con el API Objeto XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest(),//instancia del objeto para hacer un request
        $xhr = document.getElementById("xhr"),//declaro e inicializo la constante que contienen el elemento conel id xhr
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        
        
        
    xhr.addEventListener("readystatechange",(e)=>{//Evento que se ejecuta cuando se detecta cualquier cambio de estado
        
        if(xhr.readyState !== 4) return;//si el estado de la request es difernte a 4 no retorne nada
        
        
        
        if(xhr.status >= 200 && xhr.status < 300){//si la peticion tiene un estado satisfactorio
        

            let json = JSON.parse(xhr.responseText);//ddclaro e inicializo la variable json con la respuesta tipo JSON formateada como objeto javascript
            

            json.forEach(element => {//recorro el obeto javascript generado
                const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                $fragment.appendChild($li);//añado al fragmento los li que he recorrido
            });

            $xhr.appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
        }else{//en caso de que la respuesta no se satisfactoria
            
            let message = xhr.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
        }

        console.log("Este mensaje cargara de cualquier forma");//mensaje que se ejecuta independiente de la respuesta del servidor
            
    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");//abrir la peticion (metodo y end point(ruta local o web))
        
    xhr.send();//Envio sin datos para consumir

})();

//Funcion anonima auto ejecutable con el API Fetch
(()=>{
    const $fetch = document.getElementById("fetch"),//declaro e inicializo la constante que contienen el elemento conel id xhr
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        
        fetch("https://jsonplaceholder.typicode.com/users",{}).then(res =>{
            console.log(res);
            return res.json()//convierte a json  la respuesta, otros metodos de conversion (text, blob)
        })
        .then(json =>{
            console.log(json);
        })
        .catch(err=>{
            console.log(err);
        }).finally(()=>{
            console.log("Esto se ejecutara independientemente de la promesa fetch");
        });//mmeodo por defecto es GET
        
    

})();
