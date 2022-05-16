

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
		<form id="formulario" name="formulario" method="POST" action="procesa.php"><!-- Envio de formulario metodo POST (Create) -->
			
			<input type="text" id="numero1" name="numero1" />
			
			*
			
			<input type="text" id="numero2" name="numero2" />
			
			<input type="submit" id="enviar" name="enviar" value="Resultado" />
			
		</form>

        <select name="datos" id="datos"><!-- Listbox Imprime datos en php sin enviar al server -->
f
        <?php
dd
            for ($i=0; $i < 21; $i++) { 
                echo "<option value ='$i'>$i</option>";
            }
        ?>
        </select>
</body>
</html>