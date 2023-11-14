<?php
#codigo imperativo o espagueti

$automovil1 =(object)[ "marca"=>"toyota", "modelo"=>"corolla"];
$automovil2 =(object)[ "marca"=>"hyundai", "modelo"=>"acceny vision"];
$automovil3 =(object)[ "marca" => "frod", "modelo"=>"focus"];

function mostrar($automovil){

    echo "<p> Hola soy un $automovil->marca, modelo $automovil->modelo </p>";

}

mostrar($automovil1);
mostrar($automovil3);


#





?>