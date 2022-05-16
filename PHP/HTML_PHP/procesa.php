<?php
	//Recibimos los datos del formulario enviados por método POST
	$num1 = $_POST['numero1'];
	$num2 = $_POST['numero2'];
	
	$resultado = $num1 * $num2; //Realizamos la operación

	echo $resultado; //Imprimimos el resultado de la operación
	
?>