const d = document;//variable para acortar laescritura de codigo

export default function userDeviceInfo(id) {
    const $id = d.getElementById(id),
    isMobile = {
        android: ()=>navigator.userAgent.match(/android/i),//expresion regular que verifica si dentro del user agent se encuentra la palabra android y lo devuelva en un arreglo
        ios: ()=>navigator.userAgent.match(/iphone|ipad|ipod/i),
        windows: ()=>navigator.userAgent.match(/windows phone/i),
        any: function () {
            return this.android()||this.ios()||this.windows();
        }
    },
    isDesktop={
        linux: ()=>navigator.userAgent.match(/linux/i),//expresion regular que verifica si dentro del user agent se encuentra la palabra linux
        mac: ()=>navigator.userAgent.match(/mac os/i),
        windows: ()=>navigator.userAgent.match(/windows nt/i),
        any: function () {
            return this.linux()||this.mac()||this.windows();
        }
    },
    isBrowser={
        chrome: ()=>navigator.userAgent.match(/chrome/i),//expresion regular que verifica si dentro del user agent se encuentra la palabra chrome
        safari: ()=>navigator.userAgent.match(/safari/i),
        firefox: ()=>navigator.userAgent.match(/firefox/i),
        opera: ()=>navigator.userAgent.match(/opera|opera mini/i),
        ie: ()=>navigator.userAgent.match(/msie|iemobile/i),
        edge: ()=>navigator.userAgent.match(/edge/i),
        any: function () {
            return this.chrome()||this.safari()||this.firefox()||this.opera()||this.ie()||this.edge();
        }
    };
    
    console.log(navigator.userAgent);//cadena de texto que da informacion del dispositivo que inicializa el navegador
    console.log(isMobile.ios())
    console.log(isDesktop.windows());
    $id.innerHTML = `
    <ul>
        <li>User Agent:<b>${navigator.userAgent}</b> </li>
        <li>Plataforma:<b>${isMobile.any()?isMobile.any():isDesktop.any()}</b> </li>
        <li>Navegador:<b>${isBrowser.any()}</b> </li>
    </ul>
    `;//imprimo el User agent, valido si estoy en mobyle o en el escritorio, imprimo el navegador

    /*Contenido excluisivo y redirecciones */
    if(isBrowser.chrome()) $id.innerHTML += `<p><mark>Este contenido solo se ve en chrome</mark></p>`;//El contenido solo se imprimira en chrome
    if(isBrowser.firefox()) $id.innerHTML += `<p><mark>Este contenido solo se ve en Firefox</mark></p>`;
}