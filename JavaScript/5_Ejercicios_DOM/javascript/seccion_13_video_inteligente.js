const d = document;

export default function videoInteligente() {
    const $videos = d.querySelectorAll("#section13 video");//declaro e inicializo a constante vidseos que contienen todos los cideos que se encuentren dentro de el elemento con id sectio13 

    const cb = (entradas) => {//callback para usar en el observer

        entradas.forEach((entrada)=>{//recorro cada entrada
            
            d.addEventListener("visibilitychange", () => {
                if (d.visibilityState === "visible" && entrada.isIntersecting ) {//Si el docuemnto es visible y no se esta en otra pestaña o ventana y si esta sobre el video     
                    entrada.target.play();
                } else {
                    entrada.target.pause();
                }
            });


            if (entrada.isIntersecting) {//si ya se mostro en pantalla el elemento
                entrada.target.play();//Inicio el video (necesita permisos de usuario)
            }else{
                entrada.target.pause();//pauso e video
            }
        })
    }
    
    //Recibe callback que se va ejecutar cuando este observado y se cumplan los parametros de opciones definidos
    const observer = new IntersectionObserver(cb, {

        threshold: [0.5, 0.75],//se ejecuta el cb cuando el elemento tiene visible el 50%  y el 75% de su contenido
    });
  
    $videos.forEach((el) =>{//recorro el arreglo videos
        observer.observe(el);//ejecuto el observador sobre cada elemento de mi arreglo videos
    })


    


}