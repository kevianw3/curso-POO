<?php

#Variables
echo " <h1>Variables </h1>";

# varibles numerica
$numero = 5;
 echo" Esto es una veriable numero: $numero";
 echo "<br><br>";
 var_dump( $numero);
 echo "<br><br>";


 #variable palabra
 $palabra = "Palabra";
 echo " Esto es una variable texto: $palabra";
 echo "<br><br>";
 var_dump($palabra);
 echo "<br><br>";

 #variable boleana 
 $boleana = true; 
 echo " Esto es una variable boleana: $boleana";
 echo "<br><br>";
 var_dump($boleana);
 echo "<br><br>";

 $boleana1 = false; 
 echo " Esto es una variable boleana: $boleana1";
 echo "<br><br>";
 var_dump($boleana1);
 echo "<br><br>";

#varibale arreglo
#$colores = array("verde","azul");
#echo "Esto es una variable arreglo: $colores [0]";


 #variable arreglo con propiedades
 #$verduras = array ("verdura1"=>"lechuga","verdura2"=>"tomate","verdura3"=>"cebolla"); 
 #echo " Esto es una variable arreglo con propiedades: $verduras [verdura2]";
 

 #variable de tipo objetp
 $frutas = (object) ["fruta1"=>"pera","fruta2"=>"mango","fruta3"=>"cambur"];
 echo "Esto es una variable objeto: $frutas->fruta2 <br>"; 
 echo "Esto es una variable objeto: $frutas->fruta3";
 echo "<br><br>";
 var_dump($frutas);
 echo "<br><br>";


 #Metodo var_dump()
 var_dump( $numero);
 echo "<br><br>";

 var_dump($frutas);
 echo "<br><br>";

 var_dump($boleana);
 echo "<br><br>";#




?>
