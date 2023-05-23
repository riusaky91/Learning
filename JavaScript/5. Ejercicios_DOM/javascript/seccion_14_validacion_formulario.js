const d = document;

export default function formulario() {
    const $form = d.querySelector(".contact-form"),//declaro e inicializo constante que contendra el elemento con la clase contact-form
        $inputs = d.querySelectorAll(".contact-form [required]");//declaro e inicializo constante que contendra los elementos con la clase contanct-form y contienene el atributo required



        $inputs.forEach((input)=>{//recoro los elementos inputs
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


                if(patron && $input.value == ""){//si patron es verdadero y el input esta vacio

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
}