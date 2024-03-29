import { xhr } from "./xhr.js"; //manejo de modulos, exportacion de metodos para la interfaz al no ser por defecto se deben usar los corchetes
import { apiFetch } from "./fetch.js"; //manejo de modulos, exportacion de metodos para la interfaz al no ser por defecto se deben usar los corchetes
import { axiosD } from "./axios.js"; //manejo de modulos, exportacion de metodos para la interfaz al no ser por defecto se deben usar los corchetes


const d= document,
    $table = d.querySelector(".crud-table"), //variable contiene la informacion del elemento tabla en el HTML
    $form = d.querySelector(".crud-form"), //variable contiene la informacion del elemento formulario en el HTML
    $title = d.querySelector(".crud-title"), //variable contiene la informacion del elemento tiitle en el HTML
    $template = d.getElementById("crud-template").content, //variable contiene la informacion del elemento template en el HTML y en especifico es el contenido .content
    $fragment = d.createDocumentFragment(); //declaro e inicializo un constante que contiene un fragmento


    


d.addEventListener("DOMContentLoaded",(e)=>{//metodo que se ejecuta a la carga del DOM para el docuemnto
    //GET - SELECT------------------------------------------------------------------------------------------------------
    //Funcion que recibe un objeto y ejecuta CRUD con el objeto XmlHttpRequests
    /*xhr({
        method: "GET",//Propiedad que recibe el Metodo rest
        url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
        success: (res)=>{//Metodo que se ejecuta cuando no hay errores
            console.log(res);
            res.forEach(element => {//recorro el objeto javascript generado
     
                $template.querySelector(".name").textContent = element.nombre;//asigno al elemento con clase name el nombre del santo
                $template.querySelector(".constellation").textContent = element.constelacion;//asigno al elemento con clase costallation el nombre de la constelacion del santo
                $template.querySelector(".edit").dataset.id = element.id;//Creo un data atribute para el elemento editar con el valor del id
                $template.querySelector(".edit").dataset.name = element.nombre;//Creo un data atribute para el elemento editar con el valor del nombre
                $template.querySelector(".edit").dataset.constellation = element.constelacion;//Creo un data atribute para el elemento editar con el valor de la constelacion
                $template.querySelector(".delete").dataset.id = element.id;//Creo un data atribute para el elemento eliminar con el valor del id

                let $clone = d.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template
                $fragment.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom cuando se recorre el objeto json
                
            });
            $table.querySelector("tbody").appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li
            
            $form.id.value = "";
            console.log($form.id.value)
        },
        error: (err)=>{//en caso de error
            console.error(err);//imprimo error en consola
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error despues del elemento tabla del docuemnto HTML
        },
        data: null////Propiedad que la data que se va enviar
    })*/
    
    //Funcion que recibe un objeto y ejecuta CRUD con la API de FETCH
    apiFetch({
        method: "GET",//Propiedad que recibe el Metodo rest
        url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
        success: (res)=>{//Metodo que se ejecuta cuando no hay errores
            console.log(res);
            res.forEach(element => {//recorro el objeto javascript generado
     
                $template.querySelector(".name").textContent = element.nombre;//asigno al elemento con clase name el nombre del santo
                $template.querySelector(".constellation").textContent = element.constelacion;//asigno al elemento con clase costallation el nombre de la constelacion del santo
                $template.querySelector(".edit").dataset.id = element.id;//Creo un data atribute para el elemento editar con el valor del id
                $template.querySelector(".edit").dataset.name = element.nombre;//Creo un data atribute para el elemento editar con el valor del nombre
                $template.querySelector(".edit").dataset.constellation = element.constelacion;//Creo un data atribute para el elemento editar con el valor de la constelacion
                $template.querySelector(".delete").dataset.id = element.id;//Creo un data atribute para el elemento eliminar con el valor del id

                let $clone = d.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template
                $fragment.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
                
            });
            $table.querySelector("tbody").appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li

        },
        error: (err)=>{//en caso de error
            console.error(err);//imprio error en consola
            $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//improimo error en la tabla del docuemnto HTML
        },
        data: null////Propiedad que la data que se va enviar
    });

    //Funcion que recibe un objeto y ejecuta CRUD con la libreria de axios
    /*
    axiosD({
        method: "GET",//Propiedad que recibe el Metodo rest
        url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
        success: (res)=>{//Metodo que se ejecuta cuando no hay errores
            res.forEach(element => {//recorro el objeto javascript generado
    
                $template.querySelector(".name").textContent = element.nombre;//asigno al elemento con clase name el nombre del santo
                $template.querySelector(".constellation").textContent = element.constelacion;//asigno al elemento con clase costallation el nombre de la constelacion del santo
                $template.querySelector(".edit").dataset.id = element.id;//Creo un data atribute para el elemento editar con el valor del id
                $template.querySelector(".edit").dataset.name = element.nombre;//Creo un data atribute para el elemento editar con el valor del nombre
                $template.querySelector(".edit").dataset.constellation = element.constelacion;//Creo un data atribute para el elemento editar con el valor de la constelacion
                $template.querySelector(".delete").dataset.id = element.id;//Creo un data atribute para el elemento eliminar con el valor del id

                let $clone = d.importNode($template, true);//Clonando toda la estructura interna previamente creada en el template ya que solo puede haber un template
                $fragment.appendChild($clone);//agrego el clon creado a el fragmento para no injectar en todo el dom
                
            });
            $table.querySelector("tbody").appendChild($fragment);//agrego al elemento del dom el fragmeto con los elementos li

        },
    error: (err)=>{//en caso de error
        console.error(err);//imprio error en consola
        $table.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//improimo error en la tabla del docuemnto HTML
    },
    data: null////Propiedad que la data que se va enviar
    });*/
});

d.addEventListener("submit", async (e)=>{//como se utiliza la asincronia en el metodo fetch en este metodo tambien se debe agregar la plabara async
    if(e.target === $form){//Si el elemento que origina el evento es el formulario ($form)
        e.preventDefault();//Elimino eventos por defecto del formulario
        
        if (!e.target.id.value) {//si el ID esta vacio
            //POST - CREATE------------------------------------------------------------------------------------------------------

            /*xhr({
                method: "POST",//Propiedad que recibe el Metodo rest
                url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina
                    
                    //Limpiar campos diligenciados
                    e.target.nombre.value = "";
                    e.target.constelacion.value = "";
                    
                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprio error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })*/
            
            apiFetch({
                method: "POST",//Propiedad que recibe el Metodo rest
                url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina
                    //Limpiar campos diligenciados
                    e.target.nombre.value = "";
                    e.target.constelacion.value = "";
                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprimo error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })

            /*axiosD({
                method: "POST",//Propiedad que recibe el Metodo rest
                url: "http://localhost:3000/santos",//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina

                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprio error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })*/

        }else{
            //PUT - UPDATE------------------------------------------------------------------------------------------------------
            /*xhr({
                method: "PUT",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.id.value}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina
                    //Limpiar campos diligenciados
                    e.target.nombre.value = "";
                    e.target.constelacion.value = "";
                    e.target.constelacion.id = 0;
                    
                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprimo error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error debajo del formulario del docuemnto HTML
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })*/

                
            
            apiFetch({
                method: "PUT",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.id.value}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina
                    //Limpiar campos diligenciados
                    e.target.nombre.value = "";
                    e.target.constelacion.value = "";
                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprimo error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })
            
            /*axiosD({
                method: "PUT",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.id.value}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    location.reload();//recargo la pagina
                    //e.target.id.value = "";
                },
                error: (err)=>{//en caso de error
                    console.error(err);//imprimo error en consola
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                dato: {
                    nombre: e.target.nombre.value,
                    constelacion: e.target.constelacion.value,
                }
            })

            console.log("Actualizo el registro");
            e.target.id.value = null;
            $form.nombre.value = "";
            $form.constelacion.value = "";*/

        }
        
    }
    
})

d.addEventListener("click",(e)=>{
    if (e.target.matches(".edit")) {//si el elmento que origina el evento tienen la clase .edit
        $title.textContent ="Editar Santo";//Edito el titulo del formulario
        $form.nombre.value = e.target.dataset.name;//asgino al campo del input el valor del data atributte nombre
        $form.constelacion.value = e.target.dataset.constellation;//asgino al campo del input el valor del data atributte constelacion 
        $form.id.value = e.target.dataset.id;//asgino al campo del input el valor del data atributte id 
    }
    if (e.target.matches(".delete")) {
        let isDelete = confirm(`Esta seguro de eliminar al santo ${e.target.previousElementSibling.dataset.name} de la constelación de ${e.target.previousElementSibling.dataset.constellation}`);//Guardo en la variable isDelete el resultado de la alerta confirm
        
        if (isDelete) {
            //DELETE------------------------------------------------------------------------------------------------------
            /*xhr({
                method: "DELETE",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.dataset.id}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    console.log(e.target.dataset.id);
                    location.reload();//recargo la pagina
                    //e.target.id.value = "";
                },
                error: (err)=>{//en caso de error
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: null
            })*/
            
            apiFetch({
                method: "DELETE",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.dataset.id}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    console.log(e.target.dataset.id);
                    location.reload();//recargo la pagina
                    //e.target.id.value = "";
                },
                error: (err)=>{//en caso de error
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: null
            })
            /*axiosD({
                method: "DELETE",//Propiedad que recibe el Metodo rest
                url: `http://localhost:3000/santos/${e.target.dataset.id}`,//Propiedad que recibe el End Point
                success:(res)=>{
                    console.log(e.target.dataset.id);
                    location.reload();//recargo la pagina
                    //e.target.id.value = "";
                },
                error: (err)=>{//en caso de error
                    $form.insertAdjacentHTML("afterend", `<p><b>${err}</b></p>`);//imprimo error en el formulario del docuemnto HTML
                },
                data: null
            })*/
        
        }
    }
})
