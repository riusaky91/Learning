(()=>{//Funcion anonima auto ejecutable
    const xhr = new XMLHttpRequest(),//instancia del objeto para hacer un request
        $xhr = document.getElementById("xhr"),
        $fragment = document.createDocumentFragment();

        
        
    xhr.addEventListener("readystatechange",(e)=>{//Evento que se ejecuta cuando se detecta cualquier cambio de estado
        
        if(xhr.readyState !== 4) return;//si el estado de la request es difernte a 4 no retorne nada
        
        console.log(xhr);
            
    })

    xhr.open("GET","https://jsonplaceholder.typicode.com/users");//abrir la peticion (metodo y end point)
    
    xhr.send();//Envio sin datos para consumir
})();