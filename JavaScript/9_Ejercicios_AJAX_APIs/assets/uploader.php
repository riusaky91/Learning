<?php

    /*echo "Respuesta desde el servidor";*/

    /*var_dump($_FILES);/*Imprimo el texto de la variable de entorno que genera un arreglo asociativo con la información que se sube al servidor */
    
    if(isset($_FILES["file"])) {//Si la variable de tipo formulario que se llama file no esta vacia
        $name = $_FILES["file"]["name"];//declaro e inicializo la variable name con la informacion del nombre del archivo
        $file = $_FILES["file"]["tmp_name"];//declaro e inicializo la variable file con el archivo
        $error = $_FILES["file"]["error"];//declaro e inicializo la variable error con la informacion del error del archivo
        $destination = "../files/$name";//declaro e inicializo la variable destination conla ruta donde quiero que se muevan los archivos

        $upload = move_uploaded_file($file,$destination);//declaro e inicializo la variable con la funcion que mueve un archivo hacia un destino (devuelve verdadero/falso)

        if($upload){//si se recibe y se mueve el archivo
            $res = array(//declaro e inicializo la variable res tipo arreglo que dara la respuesta dependiendo el cargue exitoso
                "err" => false,
                "status" => http_response_code(200),
                "statusText" => "Archivo $name subido con exito",
                "files" => $_FILES["file"]
            );

        }else{//si no se recibe y se mueve el archivo
            $res = array(//declaro e inicializo la variable res tipo arreglo que dara la respuesta dependiendo el cargue no exitoso
                "err" => true,
                "status" => http_response_code(400),
                "statusText" => "Error al subir el archivo $name",
                "files" => $_FILES["file"]
            );
        }

        echo json_encode($res);//imprimo la respuesta del servidor del estado del archivo en formato Json
    }

    
?>