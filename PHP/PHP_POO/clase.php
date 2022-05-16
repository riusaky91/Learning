<?php //namespace PHP:POO\Persona; Este es el nombre de espacio la forma mas optima de organizar clases


    class Persona {//Clase

        private $_cedula = 1013623579;//Propiedad de acceso privado: solo puede ser utilizada en la misma clase
        public $_nombre;//Propiedad de acceso publico: puede ser utilizada en cualquier instancia de clase
        private $_apellido ;
        private $_fecNac ;
        private $_direccion ;

        public function __construct(){//Constructor de clase se ejecuta al llamar una instancia
            //$this->imprimeNombre();
        }

        public function setApellido($_apellido){//Metodos Set
            $this->_apellido = $_apellido;
        }

        public function getApellido(){//Metodo Get
            return $this->_apellido;
        }

        public function imprimeNombre(){//Metodo
            echo '<br>mi nombre es '. $this->_nombre.' '.$this->getApellido();//Utilizado porpiedades de esta clase
        }

    }


?>