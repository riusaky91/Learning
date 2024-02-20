const d = document;

function contactForm() {
    
    const $form = d.querySelector(".contact-form"),//declaro e inicializo constante que contendra el elemento con la clase contact-form
    $inputs = d.querySelectorAll(".contact-form [required]");//declaro e inicializo constante que contendra los elementos con la clase contanct-form y contienene el atributo required


    
        $inputs.forEach((input)=>{//recorro los elementos inputs
            const $span = d.createElement("span");//declaro e inicializo contante que contienen un elemento tipo span
            $span.id = input.name;//le añado al atributo id de el elemento span el mismo name del elemento input que se recorre
            $span.textContent = input.title;//le añado al atributo textcontect de el elemento span el input.title
            $span.classList.add("contact-form-error", "none");//añado las clases contact-form-error y none ala lemento span
            input.insertAdjacentElement("afterend", $span);//añado el elemento spand luego del elemento input hermando que se recorre
        })
        
        d.addEventListener("keyup", (e)=>{//Metodo que se captura cuando se levanta la tecla 
            
            if(e.target.matches(".contact-form [required]")){//si el evento keyup es ejecutado por un eelemnto con la clase contact-form y atributo requiered
                let $input = e.target,//declaro e inicializo el elemento que ejecuto el evento
                patron = $input.pattern || $input.dataset.pattern;//operador de cortocircuito que toma el valor valido en csaso de que tenga el pattern definido o tenga el dataset pattern
                
                
                if(patron && $input.value !== ""){//si patron es verdadero y el input esta vacio
                    let regex = new RegExp(patron);//declaro e inicializo la variable que contendra la expresion regular del input
                    return !regex.exec($input.value)//si la ejecucion de la expresion regular sobre el elmento es false 
                        ? d.getElementById($input.name).classList.add("is-active")//añado al elemento la clase is-active
                        : d.getElementById($input.name).classList.remove("is-active");//elimino al elemento la clase is-active
                }
                
                if(!patron){//si patron es falso
                    return $input.value === ""//si el valor del elemento que ejecuto el metodo keyup es vacio
                    ? d.getElementById($input.name).classList.add("is-active")//añado al elemento la clase is-active
                    : d.getElementById($input.name).classList.remove("is-active");//elimino al elemento la clase is-active
                }
            }
            
        })
        
        d.addEventListener("submit",(e)=>{//metodo que captura el evento submit de un formulario
            e.preventDefault();//elimino los eventos por defecto de elemento que realizo el submit para que no se procese el formulario
            alert("enviando formulario");
            
            const $loader = d.querySelector(".contact-form-loader"),
            $response = d.querySelector(".contact-form-response");
            
            $loader.classList.remove("none");//remuevo clase none del svg
            
           fetch("https://formsubmit.co/ajax/marlonleonardo.er@gmail.com",{//Manejo de api Fetch con el endpoint de la pagina de formsubmit que solicita el correo para enviar
                method: "POST",
                headers: { 
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: new FormData(e.target)
            })
            .then(res=>res.ok ? res.json(): Promise.reject(res))//Si la respuesta es ok la retornamos convertida en json si no enviamos el error al metodo catch
            .then(json=>{
                console.log(json);
                $loader.classList.add("none");//añado clase none del svg
                $response.classList.remove("none");//remuevo clase non del div 
                $form.reset();//reinicia el formulario
            })
            .catch(err=>{//manejo del error
                console.log(err);
                let message = err.statusText || "Ocurrio un error al enviar intenta nuevamente";
                $response.innerHTML = `<p>Error ${err.status}: ${message}</p>`;
            })
            .finally(setTimeout(() => {
                    $response.classList.add("none");//añado clase none del svg
                    $response.innerHTML = "";
                }, 3000)
            )
        })
}

d.addEventListener("DOMContentLoaded", e=>{//se ejecuta cuando del domm se cargue
    contactForm();
})