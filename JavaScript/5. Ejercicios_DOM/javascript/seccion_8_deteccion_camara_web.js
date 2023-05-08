const d = document;////Constante para simplificar la escritura en el uso del DOM

export default function webCam(id) {
  const $video = d.getElementById(id);//declaro e inicializo la cariable $video con el id
 

  if (navigator.mediaDevices.getUserMedia) {//si hay una camara conectada
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: false })//activo el video y desactivo el audio
      .then((stream) => {//ejecuto la promesa (solo se ejecutara de manera asincrona cuando la ejecucion del metodo funcione), stream varable con la informacion de la camara
        
        $video.srcObject = stream;//envio objeto stream al src del elemento video
        $video.play();//ejecuto metodo play para que el video no se quede en la ejecucion de un fotograma
      })
      .catch((er) => console.log("Error: ",er));//en caso de error envio el error a consola
  }
}
