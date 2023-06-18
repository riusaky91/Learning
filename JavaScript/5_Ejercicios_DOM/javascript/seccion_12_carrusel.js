const d = document;

export default function slider() {
    const $nextBtn = d.querySelector(".slider-btns .next"),//inicializo y declaro constante que contendra el elemento con la clase  slider-btns y la subclase next
    $prevBtn = d.querySelector(".slider-btns .prev"),//inicializo y declaro constante que contendra el elemento con la clase  slider-btns y la subclase prev
    $slides = d.querySelectorAll(".slider-slide");//inicializo y declaro constante que contendra otodos los elemento con la clase slider-slide

    let i = 0;
    

    d.addEventListener("click",(e)=>{//metodo para ejecutar evento click
        if(e.target === $prevBtn){//si hag click en prev
            e.preventDefault();//Elimino el comportamiento por defecto del boton para poder controlar sus eventos
            $slides[i].classList.remove("active");//esconde el slider en la posicion i
            i--;//dismunuyo en 1 la variable i


            if(i<0) i= $slides.length-1;//si la variable i es menor a 0

            $slides[i].classList.add("active");//muestro el slider en la posicion i

        }
    });

    d.addEventListener("click",(e)=>{
        if(e.target === $nextBtn){//si hago click en next
            e.preventDefault();//Elimino el comportamiento por defecto del boton para poder controlar sus eventos
            $slides[i].classList.remove("active");//esconde el slider en la posicion i
            i++;


            if(i>=$slides.length) i= 0;

            $slides[i].classList.add("active");//muestro el slider en la posicion i

        }
    });
}