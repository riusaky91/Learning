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
        let message = error.statusText || "Ocurrio un error";//operador corto circuito que toma el segundo valor si el primero esta vacio
        console.log(`Error ${error}: ${message}`);//Imprimo y añado el error encontrado al elemento del dom
    }

}

/*Arrow function que recibe un archivo y le genera una barra de progreso*/
const progressUpload = (file) =>{
    const $progress = d.createElement("progress"),/*Creacion un elemento de tipo progress */
            $span = d.createElement("span");

    $progress.value = 0;//estado de la barra del progreso al iniciar la carga
    $progress.max = 100;//estado maximo de la barra del progreso 

    $main.insertAdjacentElement("beforeend", $progress);//despues del elemento main se inserta el elenmto progress
    $main.insertAdjacentElement("beforeend", $span);//despues del elemento main se inserta el elenmto span

    const fileReader = new FileReader();//Instanciacion una constante con el objeto filreader que permite ir detectando el progreso de los bits cargados de un archivo 
    fileReader.readAsDataURL(file);//se especifica como se va leer el archivo el cual recibe como parametro el archivo a leer
    fileReader.addEventListener("progress",e=>{//evento propio del objeto filereader que se ejecuta a cada cambio del progreso de carga
        let progress = parseInt((e.loaded*100)/e.total);//Declaro e inicializo la variable con una regla de 3 para establecer el porcentaje de progreso de carga del archivo
        $progress.value = progress;//Asigno al atributo value del progress el porcentaje generado.
        $span.innerHTML = `<b>${file.name} - ${progress}%</b>`;//Asigno al elemento span los datos del archovp y el porcentaje de carga
    } )
    fileReader.addEventListener("loadend",e=>{//evento propio del objeto filereader que se ejecuta al final progreso de carga
        uploader(file);//LLamo a la funcion que hace el llamado API Fetch al PHP
        setTimeout(() => {
            $main.removeChild($progress);//elimino la barra de progreso del elemento main
            $main.removeChild($span);//elimino el mensaje de progreso del elemento main
            $files.value = "";//reinicio el atributo value del elemento file
        }, 3000);
    } )
}


d.addEventListener("change", e =>{/*Metodo que se ejecuta cuando hay un cambio dentro del documento*/
    if(e.target === $files){/*si el elemento que origina el cambio es $files*/
        console.log(e.target.files);

        const files = Array.from(e.target.files);/*Declaro e inicializo constante que convierte en tipo arreglo la informacion del archivo o la lista de que se cargan en el input*/
        files.forEach(el => {/*recorro el arreglo previamente creado*/
            progressUpload(el);/*ejecuto el metodo progresUpload por cada elemento del arreglo*/
        });
    }
})