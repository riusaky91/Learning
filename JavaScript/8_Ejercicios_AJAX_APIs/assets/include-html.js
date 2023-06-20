document.addEventListener("DOMContentLoaded", e =>{//Metodo que captura el evento que inicializa el documento

    //Funcion expresada que llama a una pagina HTML dentro de otra usando AJAX
    const  includeHTML = async (el, url)=>{

        try {
          let res = await fetch(url); //declaro e inicializo variable que detendra la ejecucion del codigo hasta que traiga los recursos solicitados en fetch y los alamcene ne la variable
          
          let html = await res.text(); //declaro e inicializo variable que detendra la ejecucion del codigo hasta que reciba la respuesta html y los alamcene en la variable

          if (!res.ok) {
            //Si la respuesta no es satisfactoria o esta fallando
            throw { status: res.status, statusText: res.statusText }; //dentro del try catch para enviar al catch se utiliza el throw
          }

          el.outerHTML = html;//Se remeplaza la div include por el contenido htmlo del archivo solicitado
        } catch (err) {
            $el.outerHTML = `<p><b>${err}</b></p>`; //imprimo error en la tabla del docuemnto HTML
        }
    }

    document
        .querySelectorAll("[data-include]")
        .forEach(el => includeHTML(el, el.getAttribute("data-include")));
})

