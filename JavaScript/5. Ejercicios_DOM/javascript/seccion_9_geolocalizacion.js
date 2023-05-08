export default function geo(id) {
    const d = document;
    const $geo = d.getElementById(id);

    

    function showPosition(position) {
        const latitud = position.coords.latitude,
        longitud = position.coords.longitude;

        $geo.innerHTML = "Tu posición actual es:"+
        "<ul><li>Latitud: <b> " + latitud + "</b></li>"+
        "<li>Longitud: <b>" +longitud+ "</b></li>"+
        "<li>Precisión: <b>"+Math.round(position.coords.accuracy) +"</b> metros</li></ul>"+
        `<a href="https://www.google.com.sa/maps/search/ ${latitud} ${longitud} ">Ver en GoogleMaps</a>`;
    
        
    }

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
    } else{

        $geo.textContent = "El navegador no soporta la geolocalizacion"
    }

    
}