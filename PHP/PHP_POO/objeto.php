<?php 


    //include = perimite errores de llamado pero continu ejecutando la clase con una advertencia
    //required = no permite errores de llamado y detiene la ejecucion de la clase con un error fatal
    //include_once y required_once = Permite llamar dos veces una clase que tenga herencia deshabilitando el padre
    //autoload = Automaticamente carga todos los scripts o clases
    //require 'clase.php';//Importamos clase de la misma carpeta no se pueden llamar dos veces por eso se comenta
    //require 'Almuno.php';//Importamos clase que hereda de Persona


    //Para instanciar una clase con un nombre de espacio se coloca la nombre de espacion \ nombre de clase $objClase = new PHP:POO\Persona\Persona; 
    include 'autoload.php';

    $objPersona = new Alumno();//Instancia de Clase u objeto

    $objPersona->_nombre = 'Marlon';//Modificando un parametro publico
    $objPersona->setApellido('Estupiñan');//Modificando un parametro privado desde su metodo get

    $objPersona -> imprimeNombre();//Llamando metodo de clase desde su instancia

    $objAlumno = new Alumno();
    $objAlumno->setmatricula(111);
    $objAlumno -> datosAlumno();

?>