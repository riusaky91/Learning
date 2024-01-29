const d = document,/*Declaro e inicializo constante con la informacion del document*/
            $main = d.querySelector("main"),/*Declaro e inicializo constante con la informaicion del elemento referenciado*/
            $files = d.getElementById("files");/*Declaro e inicializo constante con la informaicion del elemento referenciado*/



const uploader = async (file)=> {//Arrow Funcion asincrona expresada
    const formData = new FormData();/*Declaro e inicializo constante tipo FormData que recibe un parametro tipo formulario*/

    formData.append("file", file);/*Especifico en la variable tipo form data el nombre y el elemento que quiero volver tipo FormData */

    try {//Manejo de excepciones para el uso del async
        let res = await fetch("assets/uploader.php", 
            {
                method: "POST",//metodo a utilizar de la peticion
                body: formData,//cuerpo de la peticion
                headers: {"enc-type": "multipart/form-data"}
            });//declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene en la variable
        
        let json = await res.json();//declaro e inicializo variable que detendra la ejecucion del codigo hasta que convierta la respuesta en un objeto JSON y los almacene en la variable
        console.log(json);

        if(!res.ok){//Si la respuesta no es satisfactoria o esta fallando
            throw {status: res.status, statusText : res.statusText};//dentro del try catch para enviar al catch se utiliza el throw
        }
        
    } catch (error) {
        let message = res.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
        console.log(`Error ${res.status}: ${message}`);//Imprimo y añado el error encontrado al elemento del dom
    }

}


d.addEventListener("change", e =>{/*Metodo que se ejecuta cuando hay un cambio dentro del documento*/
    if(e.target === $files){/*si el elemento que roigina el cambio es $files*/
        console.log(e.target.files);

        const files = Array.from(e.target.files);/*Declaro e inicializo constante que convierte en tipo arreglo la informacion del archivo o la lista de que se cargan en el input*/
        files.forEach(el => {/*recorro el arreglo previamente creado*/
            uploader(el);/*ejecuto el metodo uploader por cada elemenyo del arreglo*/
        });
    }
})