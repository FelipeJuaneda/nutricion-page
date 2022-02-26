<?php
//llamo a names
$nombre = $_POST['nombre'];
$correo = $_POST['correo'];
$telefono = $_POST['telefono'];
$mensaje = $_POST['mensaje'];


//Datos para el correo
$destinatario = "felipejua9@gmail.com";
$asunto = "Contacto desde pagina web";

$carta = "De $nombre \n";
$carta .= "Correo: $correo \n"
$carta .= "Telefono: $telefono";
$carta .= "Mensaje: $mensaje";

//Enviando msje
mail($destinatario,$asunto, $carta);
header('Location:paginas/mensaje-envio.html')
?>