export default function test (form) {
    const d = document;//  constanto con el valor de document para acortar lineas posteriores
    const $form = d.getElementById(form);//capturo el elemento formulario mediante su id
    let ventana;//variable que contendra la nueva ventana

    d.addEventListener("submit",(e)=>{//Metodo que se ejecuta cada vez que se haga un submit dentro del documento
        
        if(e.target === $form){//Al Hacer click en el formulario
            console.log($form.url.value);
            e.preventDefault();//elimino por defecto el funcionamiento del formulario de recargar la pagina para procesar los datos
            
            ventana = window.open($form.url.value, "prueba",`innerWidth=${$form.ancho.value},innerHeight=${$form.alto.value}`);//metodo para abrir una nueva ventana y direccionar al enlace indicado referencio una variable a la nueva ventana
        }
        
    });

    d.addEventListener("click",(e)=>{//Metodo que se ejecuta cada vez que se haga un click dentro del documento
        
        if(e.target === $form.cerrar){//Al Hacer click en el boton cerrar
            console.log("cerrando...");
            ventana.close();//cierro la ventana
        }
    });
}