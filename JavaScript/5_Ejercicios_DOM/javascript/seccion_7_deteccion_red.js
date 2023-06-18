export default function networkStatus() {
    const d = document, //Constantes para simplificar la escritura en el uso del BOM
    w = window,
    n = navigator;
 
    const isOnLine = () =>{//Función expresada que verifica el estado de la conexion
        const $div = d.createElement("div");//creo un elemento div
        if(n.onLine){//si el metodo online del navegador es true
            $div.textContent ="Conexion restablecida";//añado texto al div creado
            $div.classList.add("online");//añado la clase online al div creado
            $div.classList.remove("offline");//elimino la clase offline al div creado
        }else{
            $div.textContent ="Conexion perdida";//añado texto al div creado
            $div.classList.remove("online");//elimino la clase online al div creado
            $div.classList.add("offline");//añado la clase offline al div creado

        }

        d.body.insertAdjacentElement("afterbegin", $div);//inserto como primer hijo del body el div creado
        setTimeout(() => {//se ejecuta luego de dos segundos
            d.body.removeChild($div);//elimino el div creado
        }, 2000);
    }

    w.addEventListener ("online", (e)=>{//Metodo que se ejecuta cuando no hay conexion de red establecida
        isOnLine();//ejecuto el metodo
    })
    w.addEventListener ("offline", (e)=>{//Metodo que se ejecuta cuando no hay conexion de red establecida
        isOnLine();
    })

}