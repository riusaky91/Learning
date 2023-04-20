export default function contador ($contador, $tiempo){

    const d = document;/*guardo la llamada al docuemnt en una variable para simplificar codigo */
    let cuentaRegresiva = d.getElementById($contador);//capturo el elemento h3 de documento
    let dias = 0;
    let horas = 0;
    let minutos = 2;
    let segundos = 2;

    console.log(new Date($tiempo).getTime());
    console.log(new Date($tiempo).getFullYear());
    
    let temporizador = setInterval(() => {
        
        if (segundos < 0) {
            minutos--;
            segundos = 60;

            if (minutos < 0){
                horas--;
                minutos= 60;
                
                if(horas < 0){
                    dias--;
                    horas = 24;                    
                }

            } 
        }


        cuentaRegresiva.textContent = `${dias} dias ${horas} horas ${minutos} minutos ${segundos} segundos`
        segundos--;

        if (segundos === 0 && minutos === 0 && horas === 0 && dias === 0){
            
            clearTimeout(temporizador);
            cuentaRegresiva.textContent = 'Feliz cumpleaños';
            
        }
        
    }, 1000);

}