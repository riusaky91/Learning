<?php
//////////////////////////////////
//Variables Y constantes
echo "<h3>Variables Y constantes</h3>";
/////////////////////////////////
    $numero = 10;
    $nombre = "leo";
    $bandera = true;
    $ar = array(1,2,3,4,"cinco");

    echo $bandera .'<br>'. $nombre.'<br>';
    print_r($ar);

    define("constante", 3);
    echo constante;

//////////////////////////////////
//Operadores
echo "<h3>Operadores</h3>";
/////////////////////////////////


$num1 = 5;
$num2 = 6;

$suma = $num1 + $num2;
 echo $suma;


 //////////////////////////////////
//Sentencias de control If else switch
echo "<h3>Sentencias de control If else switch</h3>";
/////////////////////////////////



if (10<8) {
    echo "Es mayor";
} else {
    echo "Es menor<br>";
}

$edad = 19;

switch ($edad) {
    case $edad<18:
        echo "es menor de edad";
        break;
    case $edad==18:
        echo "tiene 18";
        break;
    case $edad>18:
        echo "es mayor de edad";
        break;

    default:
        echo "No aplica";
        break;
}

 //////////////////////////////////
//Sentencias de control If else switch
echo "<h3>Sentencias de control While so While For</h3>";
/////////////////////////////////

$numi = 2;

while ($numi <= 10) {
    echo "numero =".$numi;
    $numi++;
}
echo "<br>";


$numi = 0;

do {
    echo "hacer obligatorio". $numi;
    $numi++;
} while ($numi <= 3);

echo "<br>";

for ($i=0; $i < 4 ; $i++) { 
    echo "num con for: ".$i;
    echo "<br>";
}

 //////////////////////////////////
//Arreglos
echo "<h3>Arreglos</h3>";
/////////////////////////////////


$arreglo = array(1 => 1,"dos" =>2,3,4,5);//Puedo indicar los indices de mi arreglo los indices pueden ser de cualquier tipo

print_r($arreglo);//Mostrar arreglo estructura
echo "<br>";
var_dump($arreglo);// mostrar estructura al detalle de arreglo
echo "<br>";
$arreglomixto = array("uno",2,true, 4.0);

var_dump($arreglomixto);
echo "<br>";

$size = count($arreglo);//Funcion tamaño de arreglo

echo $size;
echo "<br>";
$frutas = array("limon", "naranja", "banana", "mango");
sort($frutas);//Funcion de ordenamiento
rsort($frutas);//Ordenamiento inverso

if (in_array("naranja", $frutas)) {// Buscar en arreglo un valor
    echo "existe en frutas";
}
echo "<br>";

var_dump($frutas);
echo "<br>";

echo array_search("naranja", $frutas);//Busca el indice dnde se encuetra el valor

echo "<br>";

foreach ($frutas as $row) {//rrecorriendo arreglo tambien se puede con for
    echo $row;
    echo "<br>";
}

//////////////////////////////////
//Entrada y salida de datos
echo "<h3>Entrada y salida de datos</h3>";
/////////////////////////////////

//Cuando se usan '' para imprimir datos no se deben colocar variables internas
//Cuando se usan "" para impirmir un texto se colocan variables internas

$archivo = "datos.txt";

$fp = fopen($archivo, 'a');//Creo un archivo txt (w para escribir nuevo, a para agregar texto en un archivo creado), r para leer
fputs($fp, "Hola \n Mundo");//Contenido de archivo con salto de linea
fclose($fp);//cierro mi file


$fp = fopen($archivo, 'r');//Creo un archivo txt (w para escribir nuevo, a para agregar texto en un archivo creado), r para leer
while (($bufer = fgets($fp, 4096))!== false) {//Leo un archivo de texto
    echo $bufer . '<br>';
}
fclose($fp);//cierro mi file

?>