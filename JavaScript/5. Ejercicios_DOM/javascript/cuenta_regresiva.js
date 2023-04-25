export default function contador ($contador, $tiempo){

    const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */
    let cuentaRegresiva = d.getElementById($contador);//capturo el elemento h3 de documento
    let dias = 0;
    let horas = 0;
    let minutos = 2;
    let segundos = 2;


    let temporizador = setInterval(() => {//metodo expresado set interval que se ejecuta en bucle cada segundo
        
        if (segundos < 0) {//si segundo es menor que 0
            minutos--;
            segundos = 60;

            if (minutos < 0){//si minutos es menor que 0
                horas--;
                minutos= 60;
                
                if(horas < 0){//si horas es menor que 0
                    dias--;
                    horas = 24;                    
                }

            } 
        }


        cuentaRegresiva.textContent = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`;//inserto el texto con las variables interpoladas en el docuemnto html
        segundos--;

        if (segundos === 0 && minutos === 0 && horas === 0 && dias === 0){//si todas las varables llegan a 0 
            
            clearTimeout(temporizador);//se detiene el set interval
            cuentaRegresiva.textContent = 'Feliz cumpleaños';//se ejecuta el mensaje final
            
        }
        
    }, 1000);

}