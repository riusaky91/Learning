<?php

require 'clase.php';//Importo clase clase

class Alumno extends Persona{//Hereda de clase Persona
    private $matricula;//Propiedad se clase

    public function setMatricula($_matricula){//Metodos Set
        $this->_matricula = $_matricula;
    }

    public function getMatricula(){//Metodo Get
        return $this->_matricula;
    }

    public function datosAlumno(){
        $this-> imprimeNombre();
        echo '<br>Matricula: '.$this->getMatricula();
    }




}

?>