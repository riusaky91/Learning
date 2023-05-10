const d = document;//Constante para simplificar la escritura en el uso del DOM

export default function sorteoDigital(lista,boton) {
    const arreglo = ["JavaScript", "PHP", "JAVA", "C","Python", "Ruby", "Go", "Visual Basic", "Rust", "Perl"];//arreglo con lista de lenguajes

    const $lista = d.getElementById(lista);//declaro e inicializo la constante con el lemento lista


    arreglo.forEach(element => {//recorro el arreglo 
        $lista.innerHTML += `<li>${element} </li>`//agrego al documento los indices del arreglo recorrido
    });

    
    d.addEventListener("click",(e)=>{//Metodo que se ejecuta cuando hago click sobre el docuemnto
        if(e.target.matches(boton)){//si oprimo el elemento con el id boton
            alert(`Él ganador es: ${arreglo[Math.floor(Math.random()*(arreglo.length))]}`);//escojo un valor aleatorio del arreglo, el floor sirve para redondear hacia abaajo            
        }
    })
}