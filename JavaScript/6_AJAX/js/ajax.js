//Funcion anonima auto ejecutable con el API Objeto XMLHttpRequest
(()=>{
    const xhr = new XMLHttpRequest(),//instancia del objeto para hacer un request
        $xhr = document.getElementById("xhr"),//declaro e inicializo la constante que contienen el elemento con el id xhr (<ol>)
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento para optimizar peticiones

        
        
        
    xhr.addEventListener("readystatechange",(e)=>{//addEventListener => Evento que se ejecuta cuando se detecta cualquier cambio de estado;
        
        if(xhr.readyState !== 4) return;//si la propiedad readyState es difernte a 4 la funcion no va ha retornar nada
        
        if(xhr.status >= 200 && xhr.status < 300){//si la peticion tiene un estatus satisfactorio que se encuentra entre 200 y 300
        

            let json = JSON.parse(xhr.responseText);//declaro e inicializo la variable json con la respuesta tipo JSON formateada como objeto javascript
            

            json.forEach(element => {//recorro el obeto javascript generado
                const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                $fragment.appendChild($li);//añado al fragmento los li que he recorrido
            });

            $xhr.appendChild($fragment);//agrego al elemento del dom como hijo el fragmeto con los elementos li para mejorar el rendimiento
        }else{//en caso de que la respuesta no se satisfactoria
            
            let message = xhr.statusText || "Ocurrio un error";//operador corto circuito OR, que toma el valor de la derecha si el valor de la izquiera (statusText) es vacio, Null, NaN
            $xhr.innerHTML = `Error ${xhr.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
        }

       //console.log("Este mensaje cargara de cualquier forma");//mensaje que se ejecuta independiente de la respuesta del servidor
            
    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");//abrir la peticion (metodo y end point(ruta local o web))
        
    xhr.send();//Envio sin datos para consumir

})();

//Funcion anonima auto ejecutable que utiliza la API Fetch
(()=>{
    const $fetch = document.getElementById("fetch"),//declaro e inicializo la constante que contienen el elemento con el id fetch
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        
        fetch("https://jsonplaceholder.typicode.com/users",{}).then(res =>{//Metodo fetch maneja promesas (recurso, parametro de opciones para el metodo (metodo por defecto GET))

            console.log(res);
            return res.ok ? res.json() : Promise.reject(res);//Si la respuesta es correcta ? (metodo que convierte a json  la respuesta, otros metodos de conversion (text, blob)) : si es incorrecta activa el catch de la promesa
        
        })
        .then(json =>{//tomo el valor que retorne en el then anterior
            json.forEach(element => {//recorro el objeto javascript generado
                const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                $fragment.appendChild($li);//añado al fragmento los li que he recorrido
            });

            $fetch.appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
        })
        .catch(err=>{
            let message = err.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
            $fetch.innerHTML = `Error ${err.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom

        }).finally(()=>{
            //console.log("Esto se ejecutara independientemente de la promesa fetch");
        });//mmeodo por defecto es GET
        
    

})();


//Funcion anonima auto ejecutable que utiliza la API Fetch con asinc y await
(()=>{
    const $fetchAsync = document.getElementById("fetchAA"),//declaro e inicializo la constante que contienen el elemento con el id fetchAA
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        async function getData() { //Funcion asincrona declarada
            try {//Manejo de excepciones para le uso del async
                let res = await fetch("https://jsonplaceholder.typicode.com/users"),//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
                    json = await res.json();//declaro e inicializo variable que detendra la ejecucion del codigo hasta que convierta la respuesta en un objeto JSON y los alamcene en la variable
                    
                //console.log(res, json);

                if(!res.ok){//Si la respuesta no es satisfactoria o esta fallando
                    throw {status: res.status, statusText : res.statusText};//dentro del try catch para enviar al catch se utiliza el throw
                }

                json.forEach(element => {//recorro el objeto javascript generado
                    const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                    $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                    $fragment.appendChild($li);//añado al fragmento los li que he recorrido
                });
    
                $fetchAsync.appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
                
            } catch (error) {//error que se ejecuta 
                let message = error.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
                $fetchAsync.innerHTML = `Error ${error.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
    
                
            } finally{
                //console.log("Esto se ejecutara independientemente del try y catch");
            }
        }

        getData();//ejecuto la funcion asincrona

})();

//Funcion anonima auto ejecutable que utiliza axios con promesas
(()=>{
    const $axios = document.getElementById("axios"),//declaro e inicializo la constante que contienen el elemento conel id xhr
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        axios.get("https://jsonplaceholder.typicode.com/users")//utilizo la API de axios
        .then(res=>{
            //console.log(res);
            let json = res.data;
            json.forEach(element => {//recorro el objeto javascript generado
                const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                $fragment.appendChild($li);//añado al fragmento los li que he recorrido
            });

            $axios.appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
        })
        .catch(err=>{
            console.log("Estamos en el catch: ",err.response);
            let message = err.response.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
            $axios.innerHTML = `Error ${err.response.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
        })
        .finally(()=>{
            //console.log("Esto se ejecutara independientemente del try y catch");
        });

})();


//Funcion anonima auto ejecutable que utiliza axios con promesas, async y await
(()=>{
    const $axiosAsync = document.getElementById("axios-async"),//declaro e inicializo la constante que contienen el elemento conel id xhr
        $fragment = document.createDocumentFragment();//declaro e inicializo la constante que contiene un fragmento

        axios.get("https://jsonplaceholder.typicode.com/users");//utilizo la API de axios
        
        async function getData(){
            try {
                let res = await axios.get("https://jsonplaceholder.typicode.com/users"),//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en axios y los alamcena en la variable
                    json = await res.data;////declaro e inicializo variable que detendra la ejecucion del codigo hasta que convierta la respuesta en un objeto JSON y los alamcene en la variable
                    

                json.forEach(element => {//recorro el objeto javascript generado
                    const $li = document.createElement("li");//declaro e inicializo la constante li con un elemento li
                    $li.innerHTML = `Nombre: ${element.name},  Correo: ${element.email}, Telefono: ${element.phone}`;//añado al contenido de li los atributos que voy a utilizar del objeto json
                    $fragment.appendChild($li);//añado al fragmento los li que he recorrido
                });

                $axiosAsync.appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
                
            } catch (error) {
                let message = err.response.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
                    $axiosAsync.innerHTML = `Error ${err.response.status}: ${message}`;//Imprimo y añado el error encontrado al elemento del dom
            }finally{
                console.log("Esto se ejecutara independientemente del try y catch");
            }
        }

        getData();

})();