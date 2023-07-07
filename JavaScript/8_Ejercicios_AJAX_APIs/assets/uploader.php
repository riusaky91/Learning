<?php

    echo "Hola, respuesta desde el servidor";//imprime texto
    var_dump($_FILES);//Imprime objetos recibidos

    if(isset($_FILES["file"])) {//Si la variable de tipo formulario que se llama file no esta vacia
        $name = $_FILES["file"]["name"];//declaro e inicializo la variable name con la informacion del nombre del archivo
        $file = $_FILES["file"]["tmp_name"];//declaro e inicializo la variable file con el archivo
        $error = $_FILES["file"]["error"];//declaro e inicializo la variable error con la informacion del erro del archivo
        $destination = "../files/$name";//declaro e inicializo la variable destination conla ruta donde quiero que se muevan los archivos

        $upload = move_uploaded_file($file,$destination);//declaro e inicializo la variable con la funcion que mueve un archivo hacia un destino

        if($upload){//si se recibe y se mueve el archivo
            $res = array(//declaro e uinicializo la variable res tipo arreglo
                "err" => false,
                "status" => http_response_code(200),
                "statusText" => "Archivo $name subido con exito",
                "files" => $_FILES["file"]
            );

        }else{//si no se recibe y se mueve el archivo
            $res = array(
                "err" => true,
                "status" => http_response_code(400),
                "statusText" => "Error al subir el archivo $name",
                "files" => $_FILES["file"]
            );
        }

        echo json_encode($res);//imprimo la respuesta del servidor en formato Json
    }
?>