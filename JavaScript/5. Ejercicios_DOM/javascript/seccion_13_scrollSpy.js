const d = document;

export default function scrollSpy() {

    const $sections = d.querySelectorAll("section[data-scroll-spy]");//declaro e inicializo constante con los elementos que tengan la clase section y el data atribute data-scroll-spy

    const cb = (entradas) => {//callback para usar en el observer
        

        entradas.forEach((entrada)=>{//recorro cada entrada
            //console.log(entrada);
            const id = entrada.target.getAttribute("id");
            //console.log(id);
            if (entrada.isIntersecting) {//si ya se mostro en pantalla el elemento
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.add("active");//busca el primer elemento que sea un enlace que tenga el data atribute data-scrill-spy y que en su atributo hreft tenga el valor de id (sectionX) y añadale la clase active
            }else{
                d.querySelector(`a[data-scroll-spy][href="#${id}"]`).classList.remove("active");//busca el primer elemento que sea un enlace que tenga el data atribute data-scrill-spy y que en su atributo hreft tenga el valor de id (sectionX) y quitale la clase active
            }
        })
    }

    const observer = new IntersectionObserver(cb, {
        //Paramentros del intersection observer
        //root: toma por defectoel document
        //rootMargin: "-250px"//margen de foco en los cuatro lados zona interactiva de iteraccion
        threshold: [0.5, 0.75],//cuando el elemento tiene visible el 50%  y el 75% de su contenido
    });//Recibe callback que se va ejecutar cuando este observado y sus parametros de opciones

    $sections.forEach((el) =>{//recorro el arreglo sections
        observer.observe(el);//ejecuto el observador sobre cada elemento de mi arreglo sections
    })

} 