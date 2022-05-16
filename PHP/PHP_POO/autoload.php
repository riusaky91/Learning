<?php

function autocargador ($clase)
{
    include $clase . '.php';//clase padre para que el metodo autocargador ubique la carpeta de clases

}

spl_autoload_register('autocargador');//Metodo para cargar automaticamente todas las clases de una carpeta que se necesiten para ser instanciadas 




?>