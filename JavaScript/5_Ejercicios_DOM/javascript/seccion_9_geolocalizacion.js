export default function geo(id) {
    const d = document;//Constante para simplificar la escritura en el uso del DOM
    const $geo = d.getElementById(id);//capturo el elemndo geo

    

    function success(position) {//Funcion para el caso que se permita buscar la posicion
        const latitud = position.coords.latitude,//declarando e inicializando la latitud de las cordenas
        longitud = position.coords.longitude;//declarando e inicializando la longitd de las cordenas

        $geo.innerHTML = "Tu posición actual es:"+//agregando codigo en el div conla infomracion de l alatitud longitud, presicion, y pagina en google
        "<ul><li>Latitud: <b> " + latitud + "</b></li>"+
        "<li>Longitud: <b>" +longitud+ "</b></li>"+
        "<li>Precisión: <b>"+Math.round(position.coords.accuracy) +"</b> metros</li></ul>"+
        `<a href="https://www.google.com.sa/maps/@ ${latitud} ${longitud},20z" target="_blank" rel="noopener" >Ver en GoogleMaps</a>`;
    
        
    }

    const error = (err) =>{//funcion expresada para capturar un error
        console.log(err);
    }

    navigator.geolocation.getCurrentPosition(success,error);//metodo que recibe otro metodo para traer la posicion del punto de red geolocalizandola
    //wachtCurrentPosition => sirve para traer la geolocalizacion constantemente en tiempo real
    
}