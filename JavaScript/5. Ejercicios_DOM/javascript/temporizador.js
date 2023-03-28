export default function temporizador () { setInterval(()=>{//Metodo que ejecuta indefinidamente un bloque de codigo cada cierto intervalo de tiempo
    console.log(new Date().toLocaleTimeString())//Imprime como string el tiempo actual en un tervalo de 1 segundo
},1000)}//Tiempo de ejecucion en milisegundos


clearTimeout(temporizador);//Limpia y detiene el temporizador creado
